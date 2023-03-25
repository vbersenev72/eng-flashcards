import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { Login } from '../pages/login';

export interface IAppRouterProps {
}

export function AppRouter (props: IAppRouterProps) {
    const auth = true

  return (
    auth ?
        <Routes>
            <Route element={<App/>} path='/'/>
        </Routes>
        :
        <Routes>
            <Route element={<Login/>} path='/login'/>
        </Routes>
  );
}
