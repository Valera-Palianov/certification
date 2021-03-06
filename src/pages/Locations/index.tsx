import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IRootReducer } from '@/types/rootReducer' 
import { locationsRequest } from '@redux/locations/actions'
import { below } from '@mixins/breakpoints'

import Item from './Item'
import Tabs from './Tabs'
import Sort from './Sort'

const SFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const SLocations = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  ${below('md')`
    display: block;
  `}
`

const Locations: React.FC = () => {
  const locations = useSelector((state: IRootReducer) => state.locations)
  const dispath = useDispatch()

  useEffect(() => {
    if(!locations.listState.loading && !locations.listState.loaded && !locations.listState.error) {
      dispath(locationsRequest(locations.default[locations.current].latt_long))
    }
  }, [locations, dispath])

  const locationsList = locations.list.sort((a, b) => {
    if(locations.sortings[locations.currentSort] === 'Distance') {
      return a.distance - b.distance
    } else {
      if (a.title > b.title) {return 1}
      if (a.title < b.title) {return -1}
      return 0;
    }
  })

  const locationsJSX = locationsList.map(location => {
    return (
      <Link key={location.woeid} to={`/location/${location.woeid}/`}>
        <Item {...location} />
      </Link>
    )
  })

  let content: React.ReactNode = null

  if(locationsJSX.length) {
    content = <SLocations>{locationsJSX}</SLocations>
  } else {
    content = "Empty"
    if(locations.listState.loading) {
      content = "Loading..."
    }
    if(locations.listState.error) {
      content = "Loading error"
    }
  }

  return (
    <>
      <SFilter>
        <Tabs />
        <Sort />  
      </SFilter>
      {content}
    </>
  )
}

export default Locations