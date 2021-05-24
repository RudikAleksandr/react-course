import React from 'react';
import { Link } from 'react-router-dom';
import cn from './PageNotFound.module.css';

const PageNotFound = () => (
  <div className={`justify-content-center align-items-center ${cn.pageNotFound}`}>
    <h1 className={cn.notFoundLabel}>Page Not Found</h1>
    <span className={cn.errorMessage}>404</span>
    <Link className={`${cn.homeLink} btn btn-secondary`} to="/">Go back to home</Link>
  </div>
);
export default PageNotFound;
