import { ILocations } from './location'
import { IWeathers } from './weather'

export interface IRootReducer {
  locations: ILocations
  weather: IWeathers
}
