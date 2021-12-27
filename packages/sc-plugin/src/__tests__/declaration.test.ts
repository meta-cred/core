import { sourcecred as sc } from 'sourcecred';

import { getDeclaration } from '../declaration';

describe('declaration', () => {
  it('should parse without errors', () => {
    const declaration = getDeclaration();
    const res = sc.plugins.declarationParser.parseOrThrow(declaration);

    expect(res).toBeTruthy();
  });
});
