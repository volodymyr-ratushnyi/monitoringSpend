import { latest } from '../api/api';

const SET_RATES = 'SET-RATES';
const INITIALIZE = 'TOGGLE-INITIALIZED';

const initialState = {
  initialized: false,
  rates: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATES:
      return { ...state, rates: action.rates };
    case INITIALIZE:
      return { ...state, initialized: action.initialized };
    default:
      return state;
  }
};

const setRates = (rates) => ({ type: SET_RATES, rates });
const initialize = (initialized) => ({ type: INITIALIZE, initialized });

export const getRates = () => (dispatch) => {
  latest.getRates().then((response) => {
    dispatch(setRates(response.rates));
    dispatch(initialize(true));
  });
};

export default appReducer;
