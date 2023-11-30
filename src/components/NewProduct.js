import React from 'react'
import ProductForm from './ProductForm'

export default function NewProduct(props) {
    function productFormHandler(productDetail){
        console.log("new product   "+productDetail);
        props.onNewProduct(productDetail)
    }
  return (
      <ProductForm onProductForm={productFormHandler} />
  )
}
