import { filterMap } from '../utils/asciiMap';

// options (main)
export const renderFormattedText = (option, inputTxt) => {
  if (!inputTxt) return '';
  if (option === 'uppercase') return inputTxt.toUpperCase();
  if (option === 'lowercase') return inputTxt.toLowerCase();
  return inputTxt;
};


//   filters...
export const withFilters = (filter, inputTxt) => {
  if (!inputTxt) return '';
  return filterMap[filter]?.(inputTxt) || inputTxt;
};
