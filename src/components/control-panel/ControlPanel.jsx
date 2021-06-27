import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './ControlPanel.module.scss';
import { Input } from '../common/control-forms/ControlForms';
import { checkCommand, checkCost, checkDate, checkPLN, checkProduct, required } from '../../validators/validators';

const ControlPanelForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.commands}>
      <Field
        component={Input}
        name="commands"
        placeholder="Enter your command"
        type="text"
        cls="inp"
        validate={[required, checkCommand, checkDate, checkCost, checkPLN, checkProduct]}
      />
      <button className={'btn btn-primary ' + s.btn}>RUN</button>
    </form>
  );
};
const ControlPanelReduxForm = reduxForm({ form: 'control' })(ControlPanelForm);
const ControlPanel = (props) => {
  const runApp = (values) => {
    props.runApp(values.commands);
  };
  return <ControlPanelReduxForm commands={props.commands} onSubmit={runApp} />;
};

export default ControlPanel;
