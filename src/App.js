import React from 'react';
import './App.css';
import styled from 'styled-components'
import FilterLeftSide from './components/FilterLeftSide'
import CartBox from './components/CartBox'
import CardProduct from './components/CardProduct'


const Header = styled.header `
  height: 10vh;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #202124;
  border-radius: 0px 0px 10px 10px;
  color: #202124 ;
`

const Logo = styled.h1 `
  margin: 1%;
  font-family: Arial;
  display:flex;

`

const ImgLogo = styled.img `
width: 40px;
height: 40px;
padding-left: 10px;
`

const Footer = styled.footer `
  height: 10vh;
  width: 100%;
  background-color: #202124;
  color: white;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 10px;

`



class App extends React.Component {
  state = {
    produtos: [
      {
        id: Date.now(),
        nome: 'Produto 1',
        value: 20.00,
        imgUrl: 'https://picsum.photos/400/400?a=2',
      },
      {
       id: Date.now(),
       nome: 'Produto 2',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
     {
       id: Date.now(),
       nome: 'Produto 3',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
     {
       id: Date.now(),
       nome: 'Produto 4',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
     {
       id: Date.now(),
       nome: 'Produto 5',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
     {
       id: Date.now(),
       nome: 'Produto 6',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
     {
       id: Date.now(),
       nome: 'Produto 7',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
     {
       id: Date.now(),
       nome: 'Produto 8',
       value: 20.00,
       imgUrl: 'https://picsum.photos/400/400?a=2',
     },
    ]
  }
  
  

  render(){
   const novoArray = this.state.produtos.map((item) => {
      return {
        name: item.nome,
      }

    })
  console.log(novoArray)
    
    return (
    <div>
      <Header>
        <Logo>
          <p>Atlantis</p>
          <ImgLogo src="https://www.flaticon.com/svg/static/icons/svg/1356/1356479.svg" alt="" />
        </Logo>
      </Header>

      <FilterLeftSide />

      <CardProduct/>

      <CartBox/>

      <Footer><p>Todos os Direitos Reservados</p></Footer>
    </div>
      
  );

  }
}

export default App;
