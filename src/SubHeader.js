import React from 'react';
import styled from 'styled-components';
import home from './home.png';

export default function SubHeader() {
  return (

    <NavContainer> 
        <Button>
          <img src={home} alt="Logo" />
        </Button>
        <Button>
          UniMelb
        </Button>
        <Button>
          Monash
        </Button>
        <Button>
          Deakin
        </Button>
        <Button>
          UNSW
        </Button>
    </NavContainer> 

    
  );
}

const NavContainer = styled.div`
  background-color: #e1e1e1;
  height: 40px; 
  display: flex;
  align-items: center;

`

const Button = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Helvetica Neue",Arial,sans-serif;

  img {
    transform: scale(.40);
    
  }

  :hover {
    background-color: #cbcbcb;
    cursor: pointer;
  }

`
