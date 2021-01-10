import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';

const BoxFilter = styled.div`
width: 80%;
height: 14vh;
display: flex;
justify-content: center;
background-color: #202124;
box-sizing:border-box;
padding: 10px;
margin-top: 0px;

`
const Fontes = styled.p ` 
  margin-top: 30px;
  color: white;
`
const Titulo = styled.p `
  color:white;
  opacity: 0.7;

  
`

class FilterLeftSide extends React.Component {
  render() {
    return (
      <BoxFilter>
        <Titulo>filtrar</Titulo>
        <br/>
        <Fontes>Valor Mínimo:</Fontes>
        <Inputs/>
        <Fontes>Valor Máximo:</Fontes>
        <Inputs/>
        <Fontes>Buscar Produto:</Fontes>
        <Inputs/>
      </BoxFilter>
    )
  }
};

export default FilterLeftSide 



