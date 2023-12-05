import { useState } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import Products from "./components/Products"

export default function App() {
const [productList,setProductList]=useState([
  {
      id:'p1',     
      title:"Item1",
      date: new Date(2021, 11, 28)
  },
  {   
      id:'p2', 
      title:"Item2",
      date:new Date(2022, 1, 21)
  },
  {
      id:'p3', 
      title:"Item3",
      date:new Date(2021, 3, 2)
  }
])

  function newProductHandler(data){
    const a=[...productList]
    a.push({...data,date:new Date(data.date)})
    setProductList(a)
  }
 
  return (
    <div className="App">
     <NewProduct onNewProduct={newProductHandler} />
     <Products items={productList} />
    </div>
)}