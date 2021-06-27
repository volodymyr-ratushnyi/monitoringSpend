import React from 'react';
import dolar from '../../../assets/TornGlossyKarakul-max-1mb.gif';
import s from './Preloader.module.scss';

const Preloader = (props) => (
  <div className={s[props.classToProps]}>
    <img src={dolar}></img>
  </div>
);

export default Preloader;
