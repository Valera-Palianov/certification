import React, { useEffect } from 'react'
import { IRootReducer } from '@/types/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import { Woeid } from '@/types/location'
import { weatherRequest } from '@redux/weather/actions'
import Header from './Header'
import Item from './Item'
import styled from 'styled-components'

interface IUrlParams {
  woeid: string
}

const SWeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

const Weather: React.FC = () => {

  const weather = useSelector((state: IRootReducer) => state.weather)
  const dispath = useDispatch()

  let { woeid } = useParams<IUrlParams>();
  const intWoeid: Woeid = parseInt(woeid)

  useEffect(() => {
    if(!weather.weatherState.loading && !weather.weatherState.error) {

      if(weather.data === null) {
        dispath(weatherRequest(intWoeid))
      } else {
        if(weather.data.woeid !== intWoeid) {
          dispath(weatherRequest(intWoeid))
        }
      }
    }
  }, [weather, dispath, intWoeid])

  if(isNaN(intWoeid)) {
    return <Redirect to="/" />
  }
  
  let title = (weather.data) ? (weather.data.woeid === intWoeid) ? weather.data.title : 'Loading...' : ''
  let content: React.ReactNode = null

  if(weather.data !== null && weather.data.woeid === intWoeid) {
    content = weather.data.consolidated_weather.map(weather => {
      return <Item key={weather.id} {...weather} />
    })
  } else {
    content = "Nothing"
    if(weather.weatherState.loading) {
      content = "Loading..."
    }
    if(weather.weatherState.error) {
      content = "Loading error"
    }
  }

  return (
    <>
      <Header>{title}</Header>
      <SWeatherContainer>{content}</SWeatherContainer>
    </>
  )
}

export default Weather