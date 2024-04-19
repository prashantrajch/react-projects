import React from 'react'
import TotalScore from './TotalScore'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'

function Header() {
  return (
    <HeaderContainer>
      <TotalScore />
      <NumberSelector />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`