const resources = Object.create(null)

export function fetchResourcesFor (card) {
  return Promise.all([
    fetchResource(cardImageUrl(card))
  ])
}

function fetchResource (url) {
  if (resources[url]) {
    return Promise.resolve()
  } else {
    return new Promise((resolve) => {
      const img = new window.Image()
      img.onerror = () => resolve()
      img.onload = () => {
        resources[url] = img
        resolve()
      }
      img.src = url
    })
  }
}

export function getResource (url) {
  return resources[url] // TODO: make a default resource
}

export function cardImageUrl (card) {
  return `cards/${card.expansion}/${card.name}.png`
}
