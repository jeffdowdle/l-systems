/**
 * Expands a string a single interation using the production rules passed in.
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
 * @param {string} str - The string to be expanded
 * @returns {string} - The result of the production rules applied to the intial string
 */
const singleExpansion = (rules, str) => {
  const chars = str.split('');

  return chars.reduce((acc, currentChar) => {
    const matchingRule = (rules || []).find(r => r.symbol === currentChar);

    if (!matchingRule) {
      return acc + currentChar;
    }

    return acc + matchingRule.successor;
  }, '');
};

/**
 * Expands a string N iterations using the production rules passed in.
 *
 * @param {Object[]} rules - A list of production rules: LHS -> RHS
 * @param {string} rules[].symbol - The LHS of the production rule
 * @param {string} rules[].successor - The RHS of the production rule
 * @param {string} str - The string to be expanded
 * @param {string} iterations -
 * @returns {string} - The result of the production rules applied to the intial string `iterations` times
 */
export const expand = (rules, str, iterations = 1) => {
  if (iterations === 0) {
    return str;
  }

  return expand(rules, singleExpansion(rules, str), iterations - 1);
};
