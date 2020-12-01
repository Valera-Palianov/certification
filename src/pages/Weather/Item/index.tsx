import React from 'react'
import styled from 'styled-components'
import Container from '@components/Container'
import { IWeather } from '@/types/weather'
import formatTemp from '@utils/formatTemp'
import { below } from '@mixins/breakpoints'

interface IItemProps extends IWeather{
  className?: string
}

const SWeather = styled(Container)`
  height: 100;
  padding: 10px;

  ${below('md')`
    margin-bottom: 10px;
  `}
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

const Item: React.FC<IItemProps> = (props) => {

  const { className, weather_state_abbr, the_temp, applicable_date } = props

  return (
    <SWeather className={className}>
      <SImage>
        <img alt={weather_state_abbr} src={`${process.env.REACT_APP_API_URL}static/img/weather/png/64/${weather_state_abbr}.png`}/>
      </SImage>
      <STemp>Temp: {formatTemp(parseFloat(the_temp))}</STemp>
      <SDate>Date: {applicable_date}</SDate>
    </SWeather>
  )
}

export default Item