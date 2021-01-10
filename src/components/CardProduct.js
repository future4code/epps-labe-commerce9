import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav `
  width: 75vw;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px 10px 10px 10px;
  margin-top: 0px;
  margin-left: 40px;    
`

const Ordenar = styled.div `
  height: 1vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 1%;
  margin-top: 1%;
`
const BoxProduct = styled.div `
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const Product = styled.div `
width: 15vw;
box-sizing: border-box;
margin: 2%;
padding: 5px;
border: 1px solid black;
border-radius: 5px;
`
const Imagem = styled.img `
  width: 100%;
`

const Botao = styled.button `
  background-color: #202124;
  color: white;
  padding: 7px;
  margin-top: 10px;
  border: 0px;
  width: 100%;
`


class CardProduct extends React.Component {
  render() {
    return (
      <Nav>
        <BoxProduct>
          <Product>
            <Imagem src={this.props.imgUrl} alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>

          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>

          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>

          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>
        
          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>
          
          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>
          
          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>

          <Product>
            <Imagem src="https://picsum.photos/400/400?a=2" alt="" />
            <p>Titulo do Produto</p>
            <p>R$50,00</p>
            <Botao>Adicionar ao Carrinho</Botao>
          </Product>

        </BoxProduct>

      </Nav>
        
        
    )
  }
};

export default CardProduct