const resources = Object.create(null)

export function fetchResourcesFor (card) {
  return Promise.all([
    fetchResource(backgroundUrl(card)),
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
  const folder = card.type === 'hero' ? 'heroes' : 'actions'
  return `cards/${card.expansion}/${folder}/${card.name}-${card.level}.png`
}

export function backgroundUrl (card) {
  return 'cards/backgrounds/example.png'
}
