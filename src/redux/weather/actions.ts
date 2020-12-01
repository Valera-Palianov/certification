import { IWeatherRequestPayload } from './types'
import { IWeatherData } from '@/types/weather'

import api from '@api/index'

export const WEATHER_REQUEST = 'WEATHER_REQUEST'
export const WEATHER_SUCCESS = 'WEATHER_SUCCESS'
export const WEATHER_FAILED = 'WEATHER_FAILED'
export const WEATHER_RELOAD = 'WEATHER_RELOAD'

export const weatherRequest = (woeid: IWeatherRequestPayload) => {
  return(
    async (dispath: any) => {
      dispath({
        type: WEATHER_REQUEST,
      })

      try {
        const request = await api.getWeather(woeid)
        if(request.status === 200) {
          dispath(weatherSuccess(request.data))
        } else {
          throw new Error("Bad status")
        }
      } catch(e) {
        dispath(weatherFailed())
      }
    }
  )
}

const weatherSuccess = (payload: IWeatherData) => {
  return({
    type: WEATHER_SUCCESS,
    payload: payload
  })
}

const weatherFailed = () => {
  return({
    type: WEATHER_FAILED
  })
}

export const weatherReload = () => {
  return({
    type: WEATHER_RELOAD
  })
}