import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import MainContent from '../MainContent';
import PageNotFound from '../PageNotFound';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import cn from './App.module.css';
import MovieDetails from '../MovieDetails';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
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
      </Router>
    </ErrorBoundary >
  );
};

export default App;
