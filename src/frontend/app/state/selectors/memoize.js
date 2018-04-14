export function memoize (fn) {
  let lastInput
  let lastOutput
  return function () {
    if (!argumentsEquals(lastInput, arguments)) {
      lastInput = arguments
      lastOutput = fn.apply(this, arguments)
    }
    return lastOutput
  }
}

function argumentsEquals (a, b) {
  if (!a || !b || a.length !== a.length) {
    return false
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      }
    }
    return true
  }
}
