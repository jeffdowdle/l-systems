import * as actions from 'modules/axiom/actions';

describe('Axiom action creators behave correctly', () => {
  it('updateAxiom(axiom)', () => {
    const expected = {
      type: 'axiom/UPDATE_AXIOM',
      axiom: 'testString',
    };

    const result = actions.updateAxiom('testString');
    expect(result).toEqual(expected);
  });
});
