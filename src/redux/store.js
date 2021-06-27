import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products-reducer';
import appReducer from './app-reducer';

let reducers = combineReducers({
  productsApp: productsReducer,
  app: appReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
