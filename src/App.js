import React from 'react';
import styled from 'styled-components';

// import DataGridDemo from './Grid'


export default function App() {
  return (
    <React.Fragment>
      <Header>
        <TextHeader><h1>Rishika's Calculator ❤</h1></TextHeader>
      </Header>
      <Viewport>
        {/* <DataGridDemo/> */}
      </Viewport>
      
    </React.Fragment>
    );
}


const Viewport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Header = styled.div`
  background-color: #d12e61;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
`

const TextHeader = styled.div`
  color: white;
  font-family: "Helvetica Neue",Arial,sans-serif;
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.8em;

  h1 {
    padding: 0;
    margin-left: 2vw;
    
  }
`
