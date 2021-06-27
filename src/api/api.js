import * as axios from 'axios';
const KEY = 'a70159653417f27772dbdb0c8c3d5984';

const instanceAxios = axios.create({
  baseURL: `http://data.fixer.io/api/`,
});
export const latest = {
  getRates: () => instanceAxios.get(`latest?access_key=${KEY}`).then((response) => response.data),
};
