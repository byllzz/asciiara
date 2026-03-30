import { filterMap } from '../utils/asciiMap';

// --- Text casing / formatting ---
export const renderFormattedText = (option, inputTxt) => {
  if (!inputTxt) return '';
  if (option === 'uppercase') return inputTxt.toUpperCase();
  if (option === 'lowercase') return inputTxt.toLowerCase();
  if(option === 'sort') return inputTxt= "hello I am bilal"
  return inputTxt;
};


//   filters ---
export const withFilters = (filter, inputTxt) => {
  if (!inputTxt) return '';
  return filterMap[filter]?.(inputTxt) || inputTxt;
};
