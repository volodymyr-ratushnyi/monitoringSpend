import React from 'react';
import { connect } from 'react-redux';
import ControlPanel from './ControlPanel';
import { runApp } from '../../redux/products-reducer';
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { runApp })(ControlPanel);
