import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILED,
  WEATHER_RELOAD
} from './actions'
import { IWeatherData } from '@/types/weather'

import { Woeid } from '@/types/location'

export type IWeatherRequestPayload = Woeid

export interface IWeatherRequestAction {
  type: typeof WEATHER_REQUEST
  payload: IWeatherRequestPayload
}

export interface IWeatherSuccessAction {
  type: typeof WEATHER_SUCCESS
  payload: IWeatherData
}

export interface IWeatherFailedAction {
  type: typeof WEATHER_FAILED
}

export interface IWeatherReloadAction {
  type: typeof WEATHER_RELOAD
}

export type IWeatherAction = IWeatherRequestAction | IWeatherSuccessAction | IWeatherFailedAction | IWeatherReloadAction