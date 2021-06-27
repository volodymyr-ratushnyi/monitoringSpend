import React, { useEffect } from 'react';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import ContentsContainer from './components/Content/ContentsContainer';
import ControlPanelContainer from './components/control-panel/ControlPanelContainer';

export default function App(props) {
  useEffect(() => {
    props.getRates();
  }, []);
  return (
    <>
      {props.initialized ? (
        <div className="wrapper">
          <ControlPanelContainer />
          <ContentsContainer />
        </div>
      ) : (
        <Preloader classToProps="mainPreloader" className="wrapper" />
      )}
    </>
  );
}
