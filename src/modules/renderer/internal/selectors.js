import { createSelector } from 'reselect';
import { expand } from '../../lsystem/functions';

import { selectors as rulesSelectors } from '../../rules';
import { selectors as axiomSelectors } from '../../axiom';

export const getInstructions = createSelector(
  axiomSelectors.getAxiom,
  rulesSelectors.getRules,
  (axiom, rules) => expand(rules, axiom, 4),
);
