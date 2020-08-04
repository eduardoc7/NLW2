import React from 'react';
import { BrowserRouter, Route } from 'react-route-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/Landing/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;