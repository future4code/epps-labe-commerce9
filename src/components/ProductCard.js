import React from 'react';
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 100%;
`

const AddToCartButton = styled.button`
  margin: 0 auto;
  background: #6b705c;
  color: white;
  border: unset;
  border-radius: 5px;
  width: 80%;
  padding: 10px;
  
  :hover {
    background: #00cecb ;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border: 1px dashed black;
  border-radius: 5px;
  margin: 5%;
`

function ProductCard(props) {
  const { product, onAddToCart } = props;

  return (
    <Card>
      <ProductImage
        src={product.imgUrl}
        alt="Image picture"
      />
      <p>{product.name}</p>
      <p>R${product.value.toFixed(2)}</p>
      <AddToCartButton onClick={onAddToCart}>Adicionar ao Carrinho</AddToCartButton>
    </Card>
  )
}

export default ProductCard
