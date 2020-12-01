import React from 'react'
import styled from 'styled-components'
import Container from '@components/Container'

const SRadio = styled(Container)`
  display: flex;
  align-items: center;

  label {

    span {
      padding: 10px 15px;
      display: block;
      cursor: pointer;
      transition: 0.2s;
    }

    &:hover span, input:checked ~ span {
      background: ${(props) => props.theme.colors.accent};
      color: white;
    }

    input {
      display: none;

      &:disabled ~ span {
        background: none;
        color: ${(props) => props.theme.colors.border}
      }
    }
  }
`

const Radio: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, children } = props
  return <SRadio className={className}>{children}</SRadio>
}

export default Radio