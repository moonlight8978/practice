module.exports = api => {
  api.cache(() => process.env.NODE_ENV === 'production')

  const presets = ['@babel/preset-env']

  const plugins = [['@babel/plugin-proposal-class-properties', { loose: true }]]

  return {
    presets,
    plugins,
  }
}
