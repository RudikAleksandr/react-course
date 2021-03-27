import React, { useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveMovieGenre, selectActiveSortType, selectSearch } from '../../redux/moviesSelectors';
import Header from '../Header';
import FilterMovies from '../FilterMovies';
import SortMovies from '../SortMovies';
import ListMovies from '../ListMovies';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import { setActiveMovieGenre, setActiveSortType } from '../../redux/moviesSlice';
import cn from './App.module.css';

const App = () => {
  const activeMovieGenre = useSelector(selectActiveMovieGenre);
  const activeSortType = useSelector(selectActiveSortType);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handleClickMovieGenre = useCallback((movieGenre) => {
    dispatch(setActiveMovieGenre(movieGenre));
  }, [dispatch])

  const handleSelectSortType = useCallback((sortType) => {
    dispatch(setActiveSortType(sortType));
  }, [dispatch])

  return (
    <ErrorBoundary>
      <Container fluid className={cn.appContainer}>
        <Row className="flex-column align-items-center">
          <Header />
          <Col xs="12" lg="11" xl="9">
            <Row className={`flex-column align-items-center mt-2 ${cn.mainContent}`}>
              <Col className="mt-1" xs="11">
                <Row className={cn.filterSortRow}>
                  <Col xs="8">
                    <FilterMovies
                      activeType={activeMovieGenre || 'all'}
                      onClickMovieGenre={handleClickMovieGenre}
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
                  search={search}
                  sortBy={activeSortType}
                  genre={activeMovieGenre}
                  sortType={activeSortType}
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
