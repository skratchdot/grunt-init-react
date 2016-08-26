import resolveEnvPath from '~/src/app/util/resolveEnvPath';
const path = resolveEnvPath(process.env.NODE_ENV, './configureStore');
const configureStore = require(`${path}`).default;
export default configureStore;
