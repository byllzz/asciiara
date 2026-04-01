import { filterMap } from '../utils/filterMap';
import { fontMap } from '../utils/fontMap';

// fonts options
export const renderFormattedText = (option, inputTxt) => {
  if (!inputTxt) return '';
  return fontMap[option] ? fontMap[option](inputTxt) : inputTxt;
};

// filters options
export const withFilters = (filter, inputTxt) => {
  if (!inputTxt || !filter || filter === 'none') return inputTxt || '';
  return filterMap[filter]?.(inputTxt) || inputTxt;
};
