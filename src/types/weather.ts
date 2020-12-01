import { ILocation } from './location'

export interface IWeather {
  id: number
  weather_state_name: string
  weather_state_abbr: string
  wind_direction_compass: string
  created: string
  applicable_date: string
  min_temp: string
  max_temp: string
  the_temp: string
  wind_speed: number
  wind_direction: number
  air_pressure: number
  humidity: number
  visibility: number
  predictability: number
}

export interface ISource {
  title: string
  slug: string
  url: string
  crawl_rate: number
}

export interface IWeatherData extends ILocation {
  consolidated_weather: IWeather[]
  time: string
  sun_rise: string
  sun_set: string
  timezone_name: string
  timezone: string
  sources: ISource[]
  parent: ILocation
}

export interface IWeathers {
  data: null | IWeatherData
  weatherState: {
    loading: boolean
    loaded: boolean
    error: boolean
  }
}