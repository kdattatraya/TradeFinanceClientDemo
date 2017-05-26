import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import NodeForm from './components/home/nodeForm';

export default (
  <div>
    <Route exact={true} path="/" />
    <Route path="/home" component={Home} />
    <Route path="/iouNode" component={NodeForm} />
  </div>
);
