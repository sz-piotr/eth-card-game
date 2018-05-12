const isNotEmptyString = x => x !== ''
export function textFilter (text) {
  const keywords = text
    .toLowerCase()
    .split(' ')
    .filter(isNotEmptyString)

  return function (card) {
    return keywords.every(keyword =>
      card.searchText.includes(keyword)
    )
  }
}
