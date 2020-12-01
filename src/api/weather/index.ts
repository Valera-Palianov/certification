import api from '@api/api'

import { Woeid } from '@/types/location'

const getWeather = async function(woeid: Woeid) {
  const weather = await api.get(`/location/${woeid}/`)
  return weather
}

export default getWeather