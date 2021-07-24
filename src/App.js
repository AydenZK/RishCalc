import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <React.Fragment>
      <Header>
        <TextHeader>
          <h1>A.R</h1>
        </TextHeader>
      </Header>  
    </React.Fragment>
    );
}


const Header = styled.div`
  background-color: #0071B3;
  display: flex;
  flex-direction: row;

`

const TextHeader = styled.div`
  color: white;
  position: relative;
  width: 70%; 
  
  display: flex;
  flex-direction: row;
  
  font-family: "Helvetica Neue",Arial,sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 0em;
  line-height: 1.8em;
  h1 {
    margin: 0 .5em;
    padding: .618em 0;
    cursor: pointer;
  }
  h1:hover {
    color: #68c0e8;
  }
  
`
