import React from 'react';
import Home from '../Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Film from '../component/film/Film';
import Cinema from '../component/cinema/Cinema';
import Center from '../component/center/Center';

function MyRouter(props) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Navigate to='/films' />} />
          <Route path='/films' element={<Film />} />
          <Route path='/cinemas' element={<Cinema />} />
          <Route path='/center' element={<Center />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;