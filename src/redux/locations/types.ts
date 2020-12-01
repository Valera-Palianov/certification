import {
  LOCATIONS_REQUEST,
  LOCATIONS_SUCCESS,
  LOCATIONS_FAILED,
  LOCATIONS_CITY_CHANGE,
  LOCATIONS_SORT_CHANGE
} from './actions'
import { ILocation } from '@/types/location'
import { LattLong } from '@/types/location'

export interface ILocationsRequestAction {
  type: typeof LOCATIONS_REQUEST
  payload: LattLong
}

export interface ILocationsSuccessAction {
  type: typeof LOCATIONS_SUCCESS
  payload: ILocation[]
}

export interface ILocationsFailedAction {
  type: typeof LOCATIONS_FAILED
}


export interface ILocationsCityChangeAction {
  type: typeof LOCATIONS_CITY_CHANGE
  payload: number
}

export interface ILocationsSortChangeAction {
  type: typeof LOCATIONS_SORT_CHANGE
  payload: number
}

export type ILocationsAction = 
  ILocationsRequestAction | 
  ILocationsSuccessAction | 
  ILocationsFailedAction | 
  ILocationsCityChangeAction |
  ILocationsSortChangeAction