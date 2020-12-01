import { combineReducers } from 'redux'
import locationsReducer from './locations/reducer'
import weatherReducer from './weather/reducer'
import { IRootReducer } from '@/types/rootReducer'

const root = combineReducers<IRootReducer>({
  locations: locationsReducer,
  weather: weatherReducer,
})

export default root