import React from 'react';
import s from './ControlForms.module.scss';
export const Input = ({ meta, input, ...props }) => {
  return (
    <div className={s[props.cls]}>
      <input {...input} {...props} className="form-control" />
      {meta.touched && !meta.error && <span className={s.good}>Looks good!</span>}
      {meta.touched && meta.error && <span className={s.errorText}>{meta.error}</span>}
    </div>
  );
};
