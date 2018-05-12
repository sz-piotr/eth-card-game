export function attributeFilter (attribute, value) {
  return function (object) {
    return !value || object[attribute] === value
  }
}
