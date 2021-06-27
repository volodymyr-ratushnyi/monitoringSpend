import React from 'react';
import Preloader from '../common/preloader/Preloader';
import Products from './Products/Products';

const Contents = (props) => {
  return (
    <div>
      {props.totalFetching ? <Preloader classToProps="totalPreloader" /> : <h3>{props.total}</h3>}
      {Object.keys(props.listForShow).length > 0 && <Products listForShow={props.listForShow} total={props.total} />}
    </div>
  );
};

export default Contents;
