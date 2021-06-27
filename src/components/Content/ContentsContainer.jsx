import React from 'react';
import { connect } from 'react-redux';
import Contents from './Contents';
const mapStateToProps = (state) => ({
  listForShow: state.productsApp.itemsForShow,
  total: state.productsApp.total,
  totalFetching: state.productsApp.totalFetching,
});
export default connect(mapStateToProps)(Contents);
