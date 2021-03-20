import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import FilterMovies from '../FilterMovies';
import SortMovies from '../SortMovies';
import ListMovies from '../ListMovies';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import cn from './App.module.css';
import data from './data';
import SearchMovies from '../SearchMovies/SearchMovies';
import MovieDetails from '../MovieDetails';


const App = () => {
  const [listMovies, setListMovies] = useState([]);
  const [activeMovieType, setActiveMovieType] = useState('all');
  const [activeSortType, setActiveSortType] = useState('release date');
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    setListMovies(data.listMovies);
  }, [listMovies]);

  const handleClickMovieType = useCallback((activeMovieType) => {
    setActiveMovieType(activeMovieType);
  }, [])

  const handleSelectSortType = useCallback((activeSortType) => {
    setActiveSortType(activeSortType);
  }, [])

  const handleSelectMovie = useCallback((movie) => {
    document.documentElement.scrollTop = 0;
    setMovieDetails(movie);
  }, [])

  const handleCloseDetails = useCallback(() => {
    setMovieDetails(null);
  }, [])

  return (
    <ErrorBoundary>
      <Container fluid className={cn.appContainer}>
        <Row className="flex-column align-items-center">
          {movieDetails ?
            <MovieDetails
              movie={movieDetails}
              onClose={handleCloseDetails}
            /> :
            <Header>
              <SearchMovies />
            </Header>
          }
          <Col xs="12" lg="11" xl="9">
            <Row className={`flex-column align-items-center mt-2 ${cn.mainContent}`}>
              <Col className="mt-1" xs="11">
                <Row className={cn.filterSortRow}>
                  <Col xs="8">
                    <FilterMovies
                      activeType={activeMovieType}
                      onClickMovieType={handleClickMovieType}
                    />
                  </Col>
                  <Col xs="4">
                    <SortMovies
                      activeType={activeSortType}
                      onSelectSortType={handleSelectSortType}
                    />
                  </Col>
                </Row>
                <ListMovies
                  listMovies={listMovies}
                  onSelectMovie={handleSelectMovie}
                />
              </Col>
            </Row>
          </Col>
          <Footer />
        </Row>
      </Container>
    </ErrorBoundary >
  );
};

export default App;
