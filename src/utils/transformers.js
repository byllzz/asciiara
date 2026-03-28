export const renderFormattedText = ( options , inputTxt) => {
    if (options === 'uppercase') return inputTxt.toUpperCase();
    if (options === 'lowercase') return inputTxt.toLowerCase();
    return inputTxt;
  };
