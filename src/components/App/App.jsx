import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Header';
import PageNotFound from '../PageNotFound';
import loadable from '@loadable/component'
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import MovieDetails from '../MovieDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import cn from './App.module.css';

const MainContent = loadable(() => import('../MainContent'), {
  fallback: <div>Loading...</div>,
});

const App = ({ Router, location, context, store }) => {
  return (
    <Provider store={store}>
      <Router location={location} context={context}>
        <ErrorBoundary>
          <Container fluid className={cn.appContainer}>
            <Row className="flex-column align-items-center">
              <Switch>
                <Route exact path={['/', '/search', '/search:query']} >
                  <Header />
                  <MainContent />
                </Route>
                <Route exact path="/film/:id">
                  <MovieDetails />
                  <MainContent />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
              <Footer />
            </Row>
          </Container>
        </ErrorBoundary >
      </Router>
    </Provider>
  );
};

export default App;
