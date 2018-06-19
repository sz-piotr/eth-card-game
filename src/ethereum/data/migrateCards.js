const cards = require('./cards')
const fs = require('fs')
const path = require('path')

const EXPANSION_OFFSET = 1000
const ACTION_OFFSET = 500
const COMMON_OFFSET = 100
const UNCOMMON_OFFSET = 200
const RARE_OFFSET = 300
exports.migrateCards = function (middlewares = []) {
    const cardAttributes = {}
    middlewares.push(addCard(cardAttributes))
    const runMiddlewares = card => middlewares.forEach(middleware => middleware(card))
    cards.expansions.forEach((expansion, index) => {
        const offset = (index + 1) * EXPANSION_OFFSET
        getCards(expansion, offset + COMMON_OFFSET, 'common').forEach(runMiddlewares)
        getCards(expansion, offset + UNCOMMON_OFFSET, 'uncommon').forEach(runMiddlewares)
        getCards(expansion, offset + RARE_OFFSET, 'rare').forEach(runMiddlewares)
    })
    save(cardAttributes)
}

function getCards(expansion, offset, rarity) {
    const heroes = expansion.heroes[rarity].map((data, index) =>
        heroCardAttributes(data, offset + index, expansion.name, rarity)
    )
    const actions = expansion.actions[rarity].map((data, index) =>
        actionCardAttributes(data, offset + ACTION_OFFSET + index, expansion.name, rarity)
    )
    return heroes.concat(actions)
}

function heroCardAttributes(definition, number, expansion, rarity) {
    return {
        ...definition,
        type: 'hero',
        searchText: definition.displayName.toLowerCase(),
        number,
        expansion,
        rarity
    }
}

function actionCardAttributes(definition, number, expansion, rarity) {
    return {
        ...definition,
        type: 'action',
        searchText: definition.displayName.toLowerCase(),
        number,
        expansion,
        rarity
    }
}

function addCard(cardAttributes) {
    return function (card) {
        cardAttributes[card.number] = card
    }
}

function save(cardAttributes) {
    const serialized = JSON.stringify(cardAttributes, null, 2)
    fs.writeFileSync(path.join(__dirname, '../../frontend/app/data','cardAttributes.json'), serialized, 'utf-8')
  }
