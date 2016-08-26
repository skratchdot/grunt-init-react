import { expect } from 'chai';
import resolveEnvPath from '~/src/app/util/resolveEnvPath';

describe('resolveEnvPath', () => {
  it('should build the correct path', () => {
    ['development', 'test', 'foo', Math.random()].forEach((env) => {
      const neat = resolveEnvPath(env, '~/src/app/foo/Neat');
      expect(neat).to.contain('~/src/app/foo/Neat-dev');
      expect(neat).to.not.contain('~/src/app/foo/Neat-prod');
    });
    const wow = resolveEnvPath('production', '~/src/neato/Wow');
    expect(wow).to.contain('~/src/neato/Wow-prod');
    expect(wow).to.not.contain('~/src/neato/Wow-dev');
  });
});
