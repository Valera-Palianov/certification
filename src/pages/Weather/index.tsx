import React, { useEffect } from 'react'
import { IRootReducer } from '@/types/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import { Woeid } from '@/types/location'
import { weatherRequest } from '@redux/weather/actions'
import Header from './Header'
import styled from 'styled-components'
import Container from '@components/Container'
import formatTemp from '@utils/formatTemp'

interface IUrlParams {
  woeid: string
}

const SWeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

const SWeather = styled(Container)`
  height: 100;
  padding: 10px;
`
const STemp = styled.div`
  margin-bottom: 12px;
`

const SDate = styled.div`
  font-size: 12px;
`

const SImage = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
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
      return(
        <SWeather key={weather.id}>
          <SImage>
            <img alt={weather.weather_state_abbr} src={`${process.env.REACT_APP_API_URL}static/img/weather/png/64/${weather.weather_state_abbr}.png`}/>
          </SImage>
          <STemp>Temp: {formatTemp(parseFloat(weather.the_temp))}</STemp>
          <SDate>Date: {weather.applicable_date}</SDate>
        </SWeather>
      )
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