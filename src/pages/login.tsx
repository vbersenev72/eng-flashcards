import * as React from 'react';

export interface ILoginProps {
}

export function Login (props: ILoginProps) {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Login</button>
        <br />
        <a  href="/new">Регистрация</a>
        <br />
      </form>
    </div>
  );
}
