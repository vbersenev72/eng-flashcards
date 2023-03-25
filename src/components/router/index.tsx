import * as React from 'react';
import { Routes } from 'react-router-dom';
import { Login } from '../../pages/login';

export interface IAppRouterProps {
}

export function AppRouter (props: IAppRouterProps) {
    const auth = false

  return (
    auth ?
        <Routes>

        </Routes>
        :
        <Routes>
            <Login/>
        </Routes>
  );
}
