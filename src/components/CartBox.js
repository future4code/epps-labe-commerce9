import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';


const BoxCart = styled.div`
border: 1px dotted black;
margin: 1%;
padding:2%;
min-height:60vh;
max-width: 15vh;
flex-grow:1;
`


class CartBox extends React.Component {
  render() {
    return (
      <BoxCart>
        <h1>Carrinho</h1>
        <p>Valor Mínimo:</p>
        <p>Valor Máximo:</p>
        <p>Buscar Produto</p>
      
      </BoxCart>
    )
  }
};

export default CartBox