const Paths = {
  units: '/',
  unit: '/units/:id',
  newUnit: '/units/new'
}

const paramsRegex = /(?::)(\w+)/g

function resolvePath(path, params) {
  const isParamsBlank = Object.keys(params) === 0
  const isPathBlank = path === null || path === undefined || path === ''
  if (isPathBlank || isParamsBlank) {
    throw `Path or params can't be blank`
  }

  const isPathHasParams = path => paramsRegex.test(path)
  if (!isPathHasParams) {
    throw `Path doesn't has any params to resolve`
  }

  const resolvedPath = path.replace(paramsRegex, (match, captured) => params[captured])
  return resolvedPath
}

export default Paths

export { resolvePath }
