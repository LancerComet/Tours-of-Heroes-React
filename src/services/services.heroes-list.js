import heroDatabase from '../data/heroes-list.json'

const heroesList = heroDatabase

function getHeroesList () {
  return heroesList
}

function editHero (heroData) {
  const heroId = heroData.id || null
  if (!heroId) return

  const matchResult = heroesList.filter(item => item.id === heroId)
  if (matchResult.length) {
    heroesList[heroesList.indexOf(matchResult[0])] = heroData
  }
}

export {
  getHeroesList,
  editHero
}