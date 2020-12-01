import React from 'react'
import styled from 'styled-components'
import Container from '@components/Container'
import { ILocation } from '@/types/location'
import formatDistance from '@utils/formatDistance'
import { below } from '@mixins/breakpoints'

interface IItemProps extends ILocation{
  className?: string
}

const SContainer = styled(Container)`
  height: 100%;
  padding: 12px;
  ${below('md')`
    margin-bottom: 10px;
  `}
`

const STitle = styled.div`
  margin-bottom: 12px;
`

const SDistance = styled.div`
  font-size: 12px;
`

const Item: React.FC<IItemProps> = (props) => {

  const { className, title, distance } = props

  return (
    <SContainer className={className}>
      <STitle>{title}</STitle>
      <SDistance>{formatDistance(distance)}</SDistance>
    </SContainer>
  )
}

export default Item