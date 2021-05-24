import React from 'react';
import { Row, Nav, Col } from 'react-bootstrap';
import cn from './Footer.module.css';

const Footer = () => (
  <Col>
    <Row className={`justify-content-center align-items-center ${cn.footer}`}>
      <Nav.Link className={cn.netflixLink} href="/home">
        <b>netflix</b>
        roulette
      </Nav.Link>
    </Row>
  </Col>
);

export default Footer;
