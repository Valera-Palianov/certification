import { IWeathers } from '@/types/weather'
import { IWeatherAction } from './types'

import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILED,
  WEATHER_RELOAD
} from './actions'

const initialState: IWeathers = {
  data: null,
  weatherState: {
    loading: false,
    loaded: false,
    error: false
  }
}

const reducer = (state = initialState, action: IWeatherAction): IWeathers => {
  switch (action.type) {
    case WEATHER_REQUEST:
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          loading: true,
          loaded: false,
          error: false
        }
      }
    case WEATHER_SUCCESS:
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          loading: false,
          loaded: true,
          error: false
        },
        data: action.payload
      }
    case WEATHER_FAILED:
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          loading: false,
          loaded: false,
          error: true
        },
        data: null
      }
    case WEATHER_RELOAD:
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          loading: false,
          loaded: false,
          error: false
        },
        data: null
      }
    default:
      return state
  }
}

export default reducer
