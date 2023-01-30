import * as React from 'react';
import "./styles/about.css"


export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  return (
    <div className='about'>
         <a className='about_link' href='https://github.com/vbersenev72/eng-flashcards'>
          Репозиторий на github.
          <br/>
         (Документация в файле README.md)
         </a>
    </div>
  );
}
