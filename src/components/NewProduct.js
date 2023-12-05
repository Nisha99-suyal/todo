import ProductForm from './ProductForm'

export default function NewProduct(props) {
    function productFormHandler(productDetail){
        props.onNewProduct(productDetail)
    }
  return (
      <ProductForm onProductForm={productFormHandler} />
  )
}
