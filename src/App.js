import React from 'react';
import './App.css';
import styled from 'styled-components'
import Inputs from './components/Inputs'
import ProductsCart from './components/ProductsCart'
import ProductBox from './components/ProductBox'

// Determina o cabeçalho e logo
const Header = styled.header `
  height: 10vh;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid black;
  background-color: #ffed66;
  border-radius: 0px 0px 10px 10px;
  color: #202124;
  font-family: 'Source Code Pro', monospace;
`

  const Logo = styled.h1 `
    margin: 1%;
    font-family: 'Source Code Pro', monospace;
    display:flex;
  `

  const ImgLogo = styled.img `
  width: 40px;
  height: 40px;
  padding-left: 10px;
  `
// Define o rodapé
const Footer = styled.footer `
  height: 10vh;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  color: black;
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-family: 'Source Code Pro', monospace;
  display:flex;
  justify-content: space-evenly;

`
// Container dos produtos e carrinho
const AppContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${(props) => props.cartIsVisible ? 'row' : 'column'};
  padding: 10px;
  gap: 20px;
  font-family: 'Source Code Pro', monospace;
`
// Ícone do Carrinho
const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px #00000059;
  cursor: pointer;
  transition: 0.5s;
  
  > img {
    width: 50%;
    height: 45%;
  }
  
 :hover {
    box-shadow: 0 0 20px blue;
 }
`

const products = [
  {
    id: 1,
    name: 'Striker 5.0',
    value: 200000000,
    imgUrl: 'https://w7.pngwing.com/pngs/386/694/png-transparent-anakin-skywalker-star-wars-tie-fighter-tie-avanzado-star-wars-thumbnail.png',
  },
  {
    id: 2,
    name: 'Protector Monster',
    value: 50000000,
    imgUrl: 'https://w7.pngwing.com/pngs/603/803/png-transparent-earth-dulce-base-extraterrestrial-life-ufo-flying-saucer-others-compact-car-spacecraft-photography-thumbnail.png',
  },
  {
    id: 3,
    name: 'Top Tank',
    value: 100000000,
    imgUrl: 'https://img2.gratispng.com/20180210/wxw/kisspng-science-fiction-spacecraft-universe-space-warships-5a7eeebb1268a4.2412364415182680910754.jpg',
  },
  {
    id: 4,
    name: 'Destroyer Max',
    value: 570000000,
    imgUrl: 'https://w7.pngwing.com/pngs/700/80/png-transparent-dreadnought-game-capital-ship-corvette-spaceship-spacecraft-vehicle-transport-thumbnail.png',
  },
  {
    id: 5,
    name: 'Starship Power 4',
    value: 699000000,
    imgUrl: 'https://w7.pngwing.com/pngs/938/191/png-transparent-gray-spaceship-illustration-unidentified-flying-object-extraterrestrial-intelligence-extraterrestrial-life-suspension-ufo-spacecraft-warship-vehicle-thumbnail.png',
  },
  {
    id: 6,
    name: 'Unreal Future',
    value: 499990000,
    imgUrl: 'https://w7.pngwing.com/pngs/57/142/png-transparent-dreadnought-capital-ship-spacecraft-space-warfare-sci-fi-spacecraft-space-station-outer-space-weapon-thumbnail.png',
  },
  {
    id: 7,
    name: 'Land of Living',
    value: 5010000000,
    imgUrl: 'https://w7.pngwing.com/pngs/972/227/png-transparent-black-and-gray-battleship-dreadnought-spacecraft-capital-ship-space-warfare-spaceship-vehicle-transport-shoe-thumbnail.png',
  },
  {
    id: 8,
    name: 'Blocker Clound',
    value: 2100000000,
    imgUrl: 'https://w7.pngwing.com/pngs/396/573/png-transparent-star-wars-the-clone-wars-star-destroyer-stormtrooper-first-order-starwars-star-wars-episode-vii-warship-vehicle-thumbnail.png',
  },
]

class App extends React.Component {
  
  // Define o estado inicial de elementos
  state = {
    products: products,
    cart: [],
    isCartVisible: false,
    currentSearchValue: '',
    filters: {
      maxValue: null,
      minValue: null,
    },
  }

  //Função de adicionar produtos ao carrinho 
  addProductToCart = (product) => {
    const newCart = [...this.state.cart]
    const productIndexInCart = this.state.cart.findIndex((item) => item.product.id === product.id)

    if (productIndexInCart > -1) {
      newCart[productIndexInCart].quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }

    this.setState({
      cart: newCart,
    })
  }

  // Remove produtos do carrinho
  removeProductFromCart = (product) => {
    const newCart = [...this.state.cart]
    const productIndexToRemove = this.state.cart.findIndex((item) => item.product.id === product.id)

    newCart.splice(productIndexToRemove, 1)

    this.setState({
      cart: newCart,
    })
  }

  // Modifica o estado do valor dos filtros
  updateFilterValue = (newFilterValue) => {
    this.setState({
      filters: {
        ...this.state.filters,
        ...newFilterValue,
      },
    })
  }

  // Pegar os produtos filtrados 
  getFilteredProducts() {
    const { products, filters, currentSearchValue } = this.state

    let filteredProducts = products
      .filter((product) => {
        const productName = product.name.toLowerCase()
        return productName.indexOf(currentSearchValue.toLowerCase()) > -1
      })
      
      .filter((product) => {
        return product.value < (filters.maxValue || Infinity)
      })
      
      .filter((product) => {
        return product.value > (filters.minValue || 0)
      })

    return filteredProducts
  }

  // Função para mostrar o campo do carrinho
  toggleCartVisibility = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    })
  }


  changeOrder = (event) => {
    this.setState({
      selectedOrder: event.target.value,
    })
  }


  changeCurrentSearch = (event) => {
    this.setState({
      currentSearchValue: event.target.value,
    })
  }

  render(){

    const filteredProducts = this.getFilteredProducts()
    const orderedProducts = filteredProducts.sort(this.sortProducts)
    
    return (
    <div>
      <Header>
        <Logo>
          <p>Atlantis</p>
          <ImgLogo src="https://www.flaticon.com/svg/static/icons/svg/1356/1356479.svg" alt="Logo" />
        </Logo>
      </Header>
      <Inputs
          onFilterChange={this.updateFilterValue}
          searchValue={this.state.currentSearchValue}
          handleSearchChange={this.changeCurrentSearch}
        />
      <AppContainer cartIsVisible={this.state.isCartVisible}>
        <ProductBox
          products={orderedProducts}
          addProductToCart={this.addProductToCart}
          onChangeOrder={this.changeOrder}
        />
        {this.state.isCartVisible && (
          <ProductsCart
            cartContent={this.state.cart}
            removeProductFromCart={this.removeProductFromCart}
          />
        )}
        <Cart onClick={this.toggleCartVisibility}>
          <img src="https://www.flaticon.com/svg/static/icons/svg/124/124604.svg"alt="cart-icon"/>
          </Cart>
      </AppContainer>

      <Footer>
        <ImgLogo src="https://www.flaticon.com/svg/static/icons/svg/2531/2531036.svg" alt="LogoFooter" />
        <p>Todos os Direitos Reservados</p>
        <ImgLogo src="https://www.flaticon.com/svg/static/icons/svg/2530/2530926.svg" alt="LogoFooter" />
      </Footer>

    </div>
      
  );

  }
}

export default App;
