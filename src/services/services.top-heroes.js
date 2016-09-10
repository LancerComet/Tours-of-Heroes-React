import { getHeroesList } from './services.heroes-list'

export default function () {
  const heroList = getHeroesList()
  heroList.sort((item, item2) => item.level < item2.level)
  return heroList.slice(0, 4)
}