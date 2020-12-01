export type LattLong = string
export type Woeid = number

export interface IDefaultLocation {
  title: string 
  woeid: Woeid
  latt_long: LattLong
}

export interface ILocation extends IDefaultLocation {
  location_type: string
  distance: number
}

export interface ILocations {
  current: number
  default: IDefaultLocation[]
  list: ILocation[]
  listState: {
    loading: boolean,
    loaded: boolean,
    error: boolean
  }
  sortings: string[]
  currentSort: number
}