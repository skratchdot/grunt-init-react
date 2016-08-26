import resolveEnvPath from '~/src/app/util/resolveEnvPath';
const path = resolveEnvPath(process.env.NODE_ENV, './DevTools');
const DevTools = require(`${path}`).default;
export default DevTools;
