import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';


const BoxCart = styled.div`
display: flex;
flex-direction: column;
width: 18vw;
position: relative;
left: 80vw;
bottom: 121vh;
box-sizing: border-box;
padding: 5px;
border-radius: 5px;
background-color: #202124;
color:white;
`


class CartBox extends React.Component {
  render() {
    return (
      <BoxCart>
        <h1>Carrinho</h1>
        <p>Total: <strong>R$</strong></p>      
      </BoxCart>
    )
  }
};

export default CartBox