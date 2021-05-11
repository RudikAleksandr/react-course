import fs from 'fs';
import React from 'react'
import path from 'path';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server'
import App from '../src/components/App';
import configureStore from '../src/redux/configureStore';
import routes from '../src/routes';

const serverRenderer = (req, res, next) => {
  fs.readFile('./build/index.html', 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const store = configureStore();
    const promises = routes.reduce((acc, route) => {
      if (matchPath(req.url, route) && route.component && route.component.initialAction) {
        acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
      }
      return acc;
    }, []);

    Promise.all(promises).then(() => {
      const context = {};
      const statsFile = path.resolve('./build/asset-manifest.json');
      const jsx = new ChunkExtractor({ statsFile }).collectChunks(
        <App
          store={store}
          context={context}
          location={req.url}
          Router={StaticRouter}
        />
      );

      renderToString(jsx);

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const html = renderToString(jsx);
      const preloadedState = JSON.stringify(store.getState());

      return res.send(
        htmlData
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
          .replace('<noscript>You need to enable JavaScript to run this app.</noscript>', `
            <script>
              window.PRELOADED_STATE=${preloadedState.replace(/</g, '\\u003c')}
            </script>
          `)
      );
    });
  });
}

export default serverRenderer;