import React, { Component } from 'react';
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
class App extends Component {
  state = {
    listMovies: data.listMovies,
    activeMovieType: 'all',
    activeSortType: 'release date'
  };

  handleClickMovieType = (activeMovieType) => {
    this.setState({ activeMovieType });
  }

  handleSelectSortType = (activeSortType) => {
    this.setState({ activeSortType });
  }

  render() {
    return (
      <ErrorBoundary>
        <Container fluid className={cn.appContainer}>
          <Row className="flex-column align-items-center">
            <Header>
              <SearchMovies />
            </Header>
            <Col xs="12" lg="11" xl="9">
              <Row className={`flex-column align-items-center mt-2 ${cn.mainContent}`}>
                <Col className="mt-1" xs="11">
                  <Row className={cn.filterSortRow}>
                    <Col xs="8">
                      <FilterMovies
                        activeType={this.state.activeMovieType}
                        onClickMovieType={this.handleClickMovieType}
                      />
                    </Col>
                    <Col xs="4">
                      <SortMovies
                        activeType={this.state.activeSortType}
                        onSelectSortType={this.handleSelectSortType}
                      />
                    </Col>
                  </Row>
                  <ListMovies listMovies={this.state.listMovies} />
                </Col>
              </Row>
            </Col>
            <Footer />
          </Row>
        </Container>
      </ErrorBoundary>
    );
  }

};

export default App;
