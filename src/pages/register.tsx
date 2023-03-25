import * as React from 'react';

export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Register</button>
      </form>
    </div>
  );
}
