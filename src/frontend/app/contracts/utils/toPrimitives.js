export function toPrimitives (data) {
  if (isPrimitive(data)) {
    return data
  } else if (Array.isArray(data)) {
    return data.map(toPrimitives)
  } else {
    return data.toString()
  }
}

function isPrimitive (arg) {
  const type = typeof arg
  return arg == null || (type !== 'object' && type !== 'function')
}
