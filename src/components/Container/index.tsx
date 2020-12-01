import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  background: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
`

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, children } = props
  return <SContainer className={className} >{children}</SContainer> 
}

export default Container