import React from 'react';
import style from './Button.module.css';

export default function Button(props) {
    let { text, onClick } = props;
    return <button className={style.button} onClick={onClick}>{text}</button>
}