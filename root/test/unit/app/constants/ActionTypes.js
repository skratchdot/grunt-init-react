import * as constants from '~/src/app/constants/ActionTypes';
import { expect } from 'chai';

describe('ActionTypes constants', () => {
  it('should contain the correct constants', () => {
    const keys = Object.keys(constants);
    expect(keys).to.have.length(2);
    expect(keys).to.contain('INCREMENT_COUNTER');
    expect(constants.INCREMENT_COUNTER).to.eql('INCREMENT_COUNTER');
  });
});
