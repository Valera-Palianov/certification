import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from '@components/Container'

const SContainer = styled(Container)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const SBack = styled(Link)`
  padding: 10px 15px;
  display: block;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 12px;

  &:hover {
    background: ${(props) => props.theme.colors.accent};
    color: white;
  }
`

const Header: React.FC = ({children}) => {
  return (
    <SContainer>
      <SBack to="/">Go Back</SBack>
      <b>{children}</b>
    </SContainer>
  )
}

export default Header