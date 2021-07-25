import React from 'react';
import styled from 'styled-components';
import SubHeader from './SubHeader';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// import DataGridDemo from './Grid'


function App() {
  return (
    <React.Fragment>
      <Header>
        <TextHeader><h1>Rishika's Calculator ❤</h1></TextHeader>
        <SignOut>
          <AmplifySignOut />
        </SignOut>
      </Header>
      <SubHeader/>
      <Viewport>
        {/* <DataGridDemo/> */}
      </Viewport>
      
    </React.Fragment>
    );
}

export default withAuthenticator(App);

const Viewport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Header = styled.div`
  background-color: #d12e61;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

const SignOut = styled.div`
  margin-left: 70%;
  margin-right: 10px;

`

const TextHeader = styled.div`
  color: white;
  font-family: "Helvetica Neue",Arial,sans-serif;
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.8em;
  align-items: center;


  h1 {
    padding: 0;
    margin-left: 2vw;
    
  }
`
