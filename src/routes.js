import Header from './components/Header';
import MovieDetails from './components/MovieDetails';

const routes = [
  {
    path: ['/', '/search', '/search:query'],
    exact: true,
    component: Header,
  },
  {
    path: '/film/:id',
    exact: true,
    component: MovieDetails,
  },
];

export default routes;
