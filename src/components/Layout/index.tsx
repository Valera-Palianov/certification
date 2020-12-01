import React from 'react'
import styled from 'styled-components'

const SLayout = styled.div`
  max-width: 768px;
  margin: 40px auto;
`

const Layout: React.FC = ({children}) => {
  return <SLayout>{children}</SLayout>
}

export default Layout