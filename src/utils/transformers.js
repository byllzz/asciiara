import { filterMap } from '../utils/asciiMap';

// --- Text casing / formatting ---
export const renderFormattedText = (option, inputTxt) => {
  if (!inputTxt) return '';
  if (option === 'uppercase') return inputTxt.toUpperCase();
  if (option === 'lowercase') return inputTxt.toLowerCase();
  return inputTxt;
};

// --- Copy to clipboard ---
export const copyOutputResult = text => {
  navigator.clipboard.writeText(text);
};

//   filters ---
export const withFilters = (filter, inputTxt) => {
  if (!inputTxt) return '';
  return filterMap[filter]?.(inputTxt) || inputTxt;
};
