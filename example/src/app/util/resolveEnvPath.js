const resolveEnvPath = (env, prefix) => {
  const suffix = env === 'production' ? 'prod' : 'dev';
  return `${prefix}-${suffix}`;
};

export default resolveEnvPath;
