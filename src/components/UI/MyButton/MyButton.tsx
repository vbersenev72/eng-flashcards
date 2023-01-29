import * as React from 'react';
import styles from "./MyButton.module.css"


export interface IMyButtonProps {
    children: any
    onClick: any
}

export function MyButton ({children, ...props}:any) {
  return (
    <button className={styles.MyBtn} {...props}>
        {children}
    </button>
  );
}
