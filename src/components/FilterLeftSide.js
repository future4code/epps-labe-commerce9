import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';

const BoxFilter = styled.div`
border: 1px dotted black;
margin: 1%;
padding:2%;
min-height:60vh;
max-width: 15vh;
flex-grow:1;
`


class FilterLeftSide extends React.Component {
  render() {
    return (
      <BoxFilter>
        <h1>Filtro</h1>
        
        <p>Valor Mínimo:</p>
        <Inputs/>
        <p>Valor Máximo:</p>
        <Inputs/>
        <p>Buscar Produto</p>
        <Inputs/>
      </BoxFilter>
    )
  }
};

export default FilterLeftSide 



