import React, {useState} from 'react';
import styled from 'styled-components';

const BoxFilter = styled.div`
    display: flex;
    flex-grow: 1;
    width: 90%;
    height: 10vh;
    justify-content: center;
    background-color: #6b705c;
    padding: 10px;
    border: 2px solid black;
    border-radius: 0px 0px 10px 10px;
    margin-top: 0px;
    margin-left: 10px;
    margin: auto;
    font-family: 'Source Code Pro', monospace;
`
const Fontes = styled.p ` 
  margin-top: 30px;
  color: white;
`
const Titulo = styled.p `
  color:white;
  opacity: 0.7;  
`

const Inputs = styled.input`
    width:200px;
    height:15px;
    font-size:16px;
    margin: auto;
    padding-top: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
`;



export const FilterSidebar = (props) => {


    const handleMaxFilter = (event) => {
      const value = Number(event.target.value)
  
      const newFilterValue = {
        'maxValue': value,
      }
  
      props.onFilterChange(newFilterValue)
    }
  
    const handleMinFilter = (event) => {
      const value = Number(event.target.value)
  
      const newFilterValue = {
        'minValue': value,
      }
  
      props.onFilterChange(newFilterValue)
    }
  
    return (
    <>
        <BoxFilter>
         <Titulo>Filtro</Titulo>
            <Fontes>Valor Mínimo:</Fontes>
          <Inputs
            type="number"
            min={0}
            name="valorMin"
            onChange={handleMinFilter}
          />
        
            <Fontes>Valor Máximo:</Fontes>
          <Inputs
            type="number"
            min={0}
            name="valorMax"
            onChange={handleMaxFilter}
          />
            <Fontes>Buscar Produto:</Fontes>
          <Inputs
            type="text"
            name="busca"
            value={props.searchValue}
            onChange={props.handleSearchChange}
          />
        </BoxFilter>

    </>
    )
}

export default FilterSidebar;