const getShortHand = (style: string, ...values: Array<number | string>) => {
  if (values.length === 1) {
    return {[style]: values[0]};
  }

  const _genCss = (...val: Array<number | string>) => ({
    [style + 'Top']: val[0],
    [style + 'Right']: val[1],
    [style + 'Bottom']: val[2],
    [style + 'Left']: val[3],
  });

  if (values.length === 2) {
    return _genCss(values[0], values[1], values[0], values[1]);
  }

  if (values.length === 3) {
    return _genCss(values[0], values[1], values[2], values[1]);
  }

  return _genCss(values[0], values[1], values[2], values[3]);
};

export const padding = (...values: Array<number | string>) =>
  getShortHand('padding', ...values);

export const margin = (...values: Array<number | string>) =>
  getShortHand('margin', ...values);
