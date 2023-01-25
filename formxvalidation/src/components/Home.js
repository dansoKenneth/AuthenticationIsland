
import React from 'react'
import { Avatar, ButtonGroup, StyledButton, StyledSubTitle, StyledTitle } from './Formx/styled'
import Logo from '../assets/keep_moving.jpeg';

function Home() {
  return (
    <div>
        <div>
            <Avatar image={Logo}/>
        </div>
      <StyledTitle size={65}>
        Welcome to Gees
      </StyledTitle>

      <StyledSubTitle>
        Feel free to explore 
      </StyledSubTitle>

      <ButtonGroup>
      <StyledButton to="/login">Login</StyledButton>
      <StyledButton>SignUp</StyledButton>
      </ButtonGroup>
    </div>
  )
}

export default Home