import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './Application';
import { getRates } from './redux/app-reducer';
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default connect(mapStateToProps, { getRates })(App);
