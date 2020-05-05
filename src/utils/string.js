export const splitCommaWithTrim = (d) => {
  if (typeof d !== 'string') {
    console.warn(d);
    return [];
  }
  if (d) {
    return d.split(',').map((str) => str.trim());
  }
  return [];
};
