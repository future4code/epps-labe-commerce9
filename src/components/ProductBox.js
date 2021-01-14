import React from 'react'
import styled from 'styled-components';
import ProductCard from './ProductCard';


const SectionContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
const Title = styled.p`
  margin: 0;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
const Selector = styled.select`
  height: 20px;
`

export const ProductBox = (props) => {
  const { products, addProductToCart, onChangeOrder } = props;

  return(
    <SectionContainer>
      <Header>
        <Title>Quantidade de Produtos: {products.length}</Title>
        <Selector onChange={onChangeOrder}>
          <option value="asc">Preço: Crescente</option>
          <option value="desc">Preço: Decrescente</option>
        </Selector>
      </Header>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onAddToCart={() => addProductToCart(product)}
          />
        ))}
      </ProductContainer>
    </SectionContainer>
  )
}

export default ProductBox;