import store from '../redux/store';
export const required = (value = '') => {
  return value.trim() ? undefined : 'Field is required';
};
export const checkCommand = (value = '') => {
  const commands = ['add', 'list', 'total', 'clear'];
  return commands.some((word) => value.trim().toLowerCase().startsWith(word))
    ? undefined
    : 'You should input first word such as add, list, clear, total';
};
export const checkDate = (value = '') => {
  const hasCommand = ['add', 'clear'].some((word) => value.trim().toLowerCase().startsWith(word));
  const regex =
    /^(((0[1-9]|[12][0-9]|30)[-/.](0[13-9]|1[012])|31[-/.]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/.]?02)[-/.][0-9]{4}|29[-/.]?02[-/.]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
  return hasCommand && !regex.test(value.trim().split(' ')[1])
    ? 'You should pass second param in format dd-mm-yyyy, dd/mm/yyyy or dd.mm.yyyy'
    : undefined;
};
export const checkCost = (value = '') => {
  const params = value.replace(/\s+/g, ' ').trim().split(' ');
  const isAdd = value.toLowerCase().startsWith('add');
  return (isAdd && params[2] && isNaN(+params[2].replace(',', '.'))) || (isAdd && !params[2]) ? 'You shoul pass third param as number' : undefined;
};
export const checkPLN = (value = '') => {
  const params = value.replace(/\s+/g, ' ').trim().split(' ');
  const plns = Object.keys(store.getState().app.rates);
  const isAdd = value.toLowerCase().startsWith('add');
  const isTotal = value.toLowerCase().startsWith('total');
  if (isAdd && !(params[3] && plns.includes(params[3].toUpperCase()))) return 'After cost need pass type currency';
  if (isTotal && !(params[1] && plns.includes(params[1].toUpperCase()))) return 'Pass second param type currency to calculate total money';
  return undefined;
};
export const checkProduct = (value = '') => {
  const params = value.replace(/\s+/g, ' ').trim().split(' ');
  const isAdd = value.toLowerCase().startsWith('add');
  return isAdd && !params[4] ? 'Need pass 4 param - product' : undefined;
};
