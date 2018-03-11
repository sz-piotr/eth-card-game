export function makeActionCreator (type, ...parameters) {
  return function (...args) {
    if (args.length !== parameters.length) {
      throw new Error(`Invalid number of parameters supplied to action creator: ${type}.`)
    }

    let action = { type }
    parameters.forEach((parameter, index) => {
      action[parameter] = args[index]
    })
    return action
  }
}
