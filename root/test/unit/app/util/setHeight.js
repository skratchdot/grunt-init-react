import { expect } from 'chai';
import setHeight from '~/src/app/util/setHeight';

describe('setHeight', () => {
  it('should return an object in the correct format', () => {
    [200, 500, '10px', '2em'].forEach((height) => {
      const h = setHeight(height);
      expect(h).to.have.property('height');
      expect(h).to.have.property('minHeight');
      expect(h).to.have.property('maxHeight');
      expect(Object.keys(h)).to.have.length(3);
      expect(h.height).to.eql(height);
      expect(h.minHeight).to.eql(height);
      expect(h.maxHeight).to.eql(height);
    });
  });
});
