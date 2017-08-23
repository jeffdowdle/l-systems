/**
 * Expand a string using production rules passed in.
 *
 * @example
 * // returns 'YY'
 * expand([{ symbol: 'X', successor: 'YY' }])('X');
 *
 * @example
 * // returns 'BBABB'
 * expand([
 *   { symbol: 'A', successor: 'BB' },
 *   { symbol: 'B', successor: 'A' }
 * ])('ABA');
 *
 * @param {Object[]} rules - A list of production rules: LHS -> RHS
 * @param {string} rules[].symbol - The LHS of the production rule
 * @param {string} rules[].successor - The RHS of the production rule
 * @returns {function(string): string} - A function accepting a starting string to expand
 */
export const expand = rules => (str) => {
  const chars = str.split('');

  return chars.reduce((acc, currentChar) => {
    const matchingRule = (rules || []).find(r => r.symbol === currentChar);

    if (!matchingRule) {
      return acc + currentChar;
    }

    return acc + matchingRule.successor;
  }, '');
};
