import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout.js';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';
import CoursesPage from './components/course/CoursesPage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
  </Route>
);
