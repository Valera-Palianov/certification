import api from '@api/api'

import { LattLong } from '@/types/location'

const getLocations = async function(lattLong: LattLong) {
  const list = await api.get('/location/search/', {
    params: {
      lattlong: lattLong,
    }
  })

  return list
}

export default getLocations