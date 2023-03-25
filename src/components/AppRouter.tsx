import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { Login } from '../pages/login';
import { Register } from '../pages/register';

export interface IAppRouterProps {
}

export function AppRouter (props: IAppRouterProps) {
    const [auth, setAuth] = React.useState(false)

  return (
    auth ?
        <Routes>
            <Route element={<App/>} path='/'/>
        </Routes>
        :
        <Routes>
            <Route element={<Login/>} path='/'/>
            <Route element={<Register/>} path='/new'/>
        </Routes>
  );
}
