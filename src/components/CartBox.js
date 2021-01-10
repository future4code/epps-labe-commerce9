import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';


const BoxCart = styled.div`
display: flex;
flex-direction: column;
<<<<<<< HEAD
justify-self: right;
border: 1px dotted black;
margin: auto;
margin-right: 1%;
padding:4%;
min-height:60vh;
max-width: 15vh;
flex-grow:1;
=======
width: 18vw;
position: relative;
left: 80vw;
bottom: 121vh;
box-sizing: border-box;
padding: 5px;
border-radius: 5px;
background-color: #202124;
color:white;
>>>>>>> 1d620ce6a59a84446b0ce3455071619de7b88b58
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