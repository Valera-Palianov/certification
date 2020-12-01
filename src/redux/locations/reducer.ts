import { ILocations } from '@/types/location'
import { ILocationsAction } from './types'
import {
  LOCATIONS_REQUEST,
  LOCATIONS_SUCCESS,
  LOCATIONS_FAILED,
  LOCATIONS_CITY_CHANGE,
  LOCATIONS_SORT_CHANGE
} from './actions'

const initialState: ILocations = {
  current: 0,
  default: [
    {title:"Moscow", woeid:2122265, latt_long: "55.756950,37.614971"},
    {title: "London", woeid: 44418, latt_long: "51.506321,-0.12714"},
    {title: "Paris", woeid: 615702, latt_long: "48.856930,2.341200"},
    {title:"Rome", woeid:721943, latt_long: "41.903111,12.495760"},
    {title:"Berlin", woeid:638242, latt_long: "52.516071,13.376980"},
  ],
  listState: {
    loading: false,
    loaded: false,
    error: false
  },
  list: [],
  sortings: ['Distance', 'Name'],
  currentSort: 0,
}

const reducer = (state = initialState, action: ILocationsAction): ILocations => {
  switch (action.type) {
    case LOCATIONS_REQUEST:
      return {
        ...state,
        listState: {
          ...state.listState,
          loading: true,
          loaded: false,
          error: false
        }
      }
    case LOCATIONS_SUCCESS:
      return {
        ...state,
        listState: {
          ...state.listState,
          loading: false,
          loaded: true,
          error: false
        },
        list: action.payload
      }
    case LOCATIONS_FAILED:
      return {
        ...state,
        listState: {
          ...state.listState,
          loading: false,
          loaded: false,
          error: true
        },
        list: []
      }
    case LOCATIONS_CITY_CHANGE:
      return {
        ...state,
        current: action.payload,
        listState: {
          ...state.listState,
          loading: false,
          loaded: false,
          error: false
        },
        list: []
      }
    case LOCATIONS_SORT_CHANGE:
      return {
        ...state,
        currentSort: action.payload,
      }
    default:
      return state
  }
}

export default reducer
