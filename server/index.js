import express from 'express';
import serverRenderer from './serverRenderer';

const PORT = 3006;
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);
router.use(express.static('./build'));
router.use('*', serverRenderer);

app.use(router);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

