export const parseDollarPrice = (dollarPrice) =>
  parseFloat(dollarPrice.slice(1));
 * @param {Array} arr
 * @returns {Array}
 */
export const removeDuplicates = (arr) => [...new Set(arr)];
