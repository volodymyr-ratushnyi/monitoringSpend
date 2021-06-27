import { latest } from '../api/api';

const ADD_PRODUCT = 'ADD-PRODUCT';
const SHOW_LIST = 'SHOW-LIST';
const CLEAR_DATE = 'CLEAR-DATE';
const CALCULATE_TOTAL = 'CALCULATE-TOTAL';
const TOGGLE_TOTAL_FETCHING = 'TOGGLE-TOTAL-FETCHING';
const initialState = {
  items: {},
  itemsForShow: {},
  total: '',
  totalFetching: false,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const date = action.date;
      return state.items[date]
        ? {
            ...state,
            items: {
              ...state.items,
              [date]: {
                costs: [...state.items[date].costs, action.cost],
                plns: [...state.items[date].plns, action.pln],
                products: [...state.items[date].products, action.product],
              },
            },
            total: '',
          }
        : {
            ...state,
            items: {
              ...state.items,
              [date]: {
                costs: [action.cost],
                plns: [action.pln],
                products: [action.product],
              },
            },
            total: '',
          };
    case SHOW_LIST:
      const itemsForShow = {};
      Object.keys(state.items)
        .sort((a, b) => {
          a = a.split('-');
          b = b.split('-');
          return new Date(a[2], a[1], a[0]) - new Date(b[2], b[1], b[0]);
        })
        .forEach((date) => {
          itemsForShow[date] = state.items[date];
        });
      return { ...state, itemsForShow: itemsForShow, total: '' };
    case CLEAR_DATE:
      const copyState = { ...state, items: { ...state.items }, total: '' };
      delete copyState.items[action.date];
      return copyState;
    case CALCULATE_TOTAL:
      let total = 0;
      for (let date in state.items) {
        state.items[date].costs.forEach((cost, index) => {
          total = total + cost * (1 / action.rates[state.items[date].plns[index]]);
        });
      }

      total = `${parseInt(total * action.rates[action.currency] * 100) / 100} ${action.currency}`;
      return { ...state, total };
    case TOGGLE_TOTAL_FETCHING:
      return { ...state, totalFetching: action.isFetching };
    default:
      return state;
  }
};

const addProduct = (date, cost, pln, product) => ({ type: ADD_PRODUCT, date, cost, pln, product });
const showList = () => ({ type: SHOW_LIST });
const clearDate = (date) => ({ type: CLEAR_DATE, date });
const calculateTotal = (rates, currency) => ({ type: CALCULATE_TOTAL, rates, currency });
const toggleTotalFetching = (isFetching) => ({ type: TOGGLE_TOTAL_FETCHING, isFetching });

export const runApp = (message) => (dispatch) => {
  const info = message.replace(/\s+/g, ' ').trim().split(' ');
  let [command, secParam, cost, pln, ...product] = info;
  const date = secParam.replace(/\.|\//g, '-');
  switch (command.toLowerCase()) {
    case 'add':
      dispatch(addProduct(date, cost, pln.toUpperCase(), product.join(' ')));
      dispatch(showList());
      break;
    case 'list':
      dispatch(showList());
      break;
    case 'clear':
      dispatch(clearDate(date));
      dispatch(showList());
      break;
    case 'total':
      const currency = secParam;
      dispatch(toggleTotalFetching(true));
      latest.getRates().then((response) => {
        dispatch(calculateTotal(response.rates, currency.toUpperCase()));
        dispatch(toggleTotalFetching(false));
      });
      break;
    default:
      break;
  }
};
export default productsReducer;
