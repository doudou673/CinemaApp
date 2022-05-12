import React, { Suspense } from 'react';
import Home from '../Home';
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import AuthComponent from './AuthComponent';

function MyRouter() {
  const LazyLoad = path => {
    const Comp = React.lazy(() => import(`../component/${path}`))
    return (
      <Suspense fallback={<div>加载中……</div>}>
        <Comp />
      </Suspense>
    )
  }


  const element = useRoutes([
    {
      path: '',
      element: <Home />,
      children: [
        { path: '', element: <Navigate to='/films' /> },
        { path: 'films', element: LazyLoad('film/Film') },
        { path: 'cinemas', element: LazyLoad('cinema/Cinema') },
        { path: 'center', element: <AuthComponent path='/login'>{LazyLoad('center/Center')}</AuthComponent> },
        { path: 'login', element: LazyLoad('center/Login') },
      ]
    },
    { path: 'film/:filmId', element: LazyLoad('film/Detail') },
    { path: '*', element: <Navigate to='/' /> }
  ])

  return (
    // <Router>
    //   <Routes>
    //     <Route path='' element={<Home />}>
    //       <Route path='' element={<Navigate to='films' />} />
    //       <Route path='films' element={<Film />} />
    //       <Route path='cinemas' element={<Cinema />} />
    //       <Route path='center' element={<Center />} />
    //     </Route>
    //     <Route path='film/:filmId' element={<Detail />} />
    //     <Route path='*' element={<Navigate to='/' />} />
    //   </Routes>
    // </Router>
    element
  );
}

export default MyRouter;