import { ILocations, LattLong } from '@/types/location'
import api from '@api/index'

export const LOCATIONS_REQUEST = 'LOCATIONS_REQUEST'
export const LOCATIONS_SUCCESS = 'LOCATIONS_SUCCESS'
export const LOCATIONS_FAILED = 'LOCATIONS_FAILED'
export const LOCATIONS_CITY_CHANGE = 'LOCATIONS_CITY_CHANGE'
export const LOCATIONS_SORT_CHANGE = 'LOCATIONS_SORT_CHANGE'

export const locationsRequest = (lattLong: LattLong) => {
  return(
    async (dispath: any) => {
      dispath({
        type: LOCATIONS_REQUEST,
      })

      try {
        const request = await api.getLocations(lattLong)
        if(request.status === 200) {
          dispath(locationsSuccess(request.data))
        } else {
          throw new Error('Bad status')
        }
      } catch(e) {
        dispath(locationsFailed())
      }
    }
  )
}

const locationsSuccess = (payload: ILocations) => ({
  type: LOCATIONS_SUCCESS,
  payload: payload
})

const locationsFailed = () => ({
  type: LOCATIONS_FAILED
})

export const locationsCityChange = (index: number) => ({
  type: LOCATIONS_CITY_CHANGE,
  payload: index
})

export const locationsSortChange = (index: number) => ({
  type: LOCATIONS_SORT_CHANGE,
  payload: index
})