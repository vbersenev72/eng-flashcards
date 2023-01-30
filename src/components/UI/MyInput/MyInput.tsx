import * as React from 'react';
import styles from "./MyInput.module.css"

export interface IMyInputProps {
}

export function MyInput ({...props}: any) {
  return (
    <input type="text" placeholder='Введите перевод' className={styles.MyInput} {...props} />
  );
}
