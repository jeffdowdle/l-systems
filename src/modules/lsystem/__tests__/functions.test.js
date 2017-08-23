import {
  expand,
} from '../functions';

const testExpand = (str, rules, expected) => {
  expect(expand(rules, str)).toBe(expected);
};

const testExpandWithIterations = (str, rules, iterations, expected) => {
  expect(expand(rules, str, iterations)).toBe(expected);
};

describe('expand(str, rules)', () => {
  it('returns the original string if there are no matching rules', () => {
    testExpand('X', null, 'X');
    testExpand('X', [], 'X');
    testExpand('X', [
      { symbol: 'Y', successor: 'XX' }
    ], 'X');
  });

  it('expands a single iteration if the number of iterations aren`t specified', () => {
    testExpand('X', [
      { symbol: 'X', successor: 'YY' }
    ], 'YY');

    testExpand('ABA', [
      { symbol: 'A', successor: 'BB' },
      { symbol: 'B', successor: 'A' },
    ], 'BBABB');
  });

  it('expands N iterations', () => {
    testExpandWithIterations(
      'X',
      [{ symbol: 'X', successor: 'YY' }],
      1,
      'YY',
    );

    testExpandWithIterations(
      'X',
      [{ symbol: 'X', successor: 'YY' }],
      2,
      'YY',
    );

    testExpandWithIterations(
      'X',
      [{ symbol: 'X', successor: 'YXY' }],
      2,
      'YYXYY',
    );

    testExpandWithIterations(
      'X',
      [{ symbol: 'X', successor: 'YXY' }],
      3,
      'YYYXYYY',
    );

    testExpandWithIterations(
      'X',
      [{ symbol: 'X', successor: 'YXY' }],
      20,
      'YYYYYYYYYYYYYYYYYYYYXYYYYYYYYYYYYYYYYYYYY', // 20 Ys, an X, then 20 more Ys ;)
    );

    testExpandWithIterations(
      'ABBY',
      [
        { symbol: 'A', successor: 'ABZ' },
        { symbol: 'B', successor: 'A' },
        { symbol: 'Y', successor: 'BZ' },
      ],
      0,
      'ABBY',
    );

    testExpandWithIterations(
      'ABBY',
      [
        { symbol: 'A', successor: 'ABZ' },
        { symbol: 'B', successor: 'A' },
        { symbol: 'Y', successor: 'BZ' },
      ],
      1,
      'ABZAABZ',
    );

    testExpandWithIterations(
      'ABBY',
      [
        { symbol: 'A', successor: 'ABZ' },
        { symbol: 'B', successor: 'A' },
        { symbol: 'Y', successor: 'BZ' },
      ],
      2,
      'ABZAZABZABZAZ',
    );
  });

  it('will ignore rules who\'s symbols don\'t appear in the inital string', () => {
    testExpand('X', [
      { symbol: 'X', successor: 'YY' },
      { symbol: 'Y', successor: 'ZZ' },
    ], 'YY');

    testExpand('ABA', [
      { symbol: 'A', successor: 'BB' },
      { symbol: 'B', successor: 'A' },
      { symbol: 'Y', successor: 'ZZ' },
    ], 'BBABB');
  });

  it('will treat characters without a rule as terminals and return them as is', () => {
    testExpand('K', [
      { symbol: 'X', successor: 'YY' },
    ], 'K');

    testExpand('AKBVA', [
      { symbol: 'A', successor: 'BB' },
      { symbol: 'B', successor: 'A' },
    ], 'BBKAVBB');
  });

  it('accepts arbitrary characters', () => {
    testExpand('K+BA-[]987', [
      { symbol: 'X', successor: 'YY' },
      { symbol: '9', successor: '[9]' },
      { symbol: '-', successor: '+' },
    ], 'K+BA+[][9]87');
  });
});
