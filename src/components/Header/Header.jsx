import React from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';

import cn from './Header.module.css';

const Header = ({ children }) => {
  return (
    <Col className={cn.header}>
      <Row className="justify-content-between align-items-end mb-5 ml-5 mr-5 mt-3">
        <Nav.Link className={cn.netflixLink} href="/home"><b>netflix</b>roulette</Nav.Link>
        <Button variant="" className={cn.addMovieButton}>+ Add movie</Button>
      </Row>
      {children}
    </Col>
  );
}

export default Header;
