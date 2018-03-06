export function makeActionCreator (type, ...parameters) {
  return function (...args) {
    let action = { type }
    parameters.forEach((parameter, index) => {
      action[parameter] = args[index]
    })
    return action
  }
}
