import { getHeroesList } from './services.heroes-list'

export default function (id) {
  id = parseInt(id, 10)
  const result = getHeroesList().filter(item => item.id === id)
  return result.length ? result[0] : {}
}