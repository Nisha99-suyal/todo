import { useState } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import Products from "./components/Products"

function App() {
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
    console.log(a)
    setProductList(a)
    console.log(productList,"state")
    console.log(data,"....");
  }
 
  return (
    <div className="App">
     <NewProduct onNewProduct={newProductHandler} />
     {/* {productList.length} */}
     <Products items={productList} />
    </div>
  );
}

export default App;

// const[product,setProduct]=useState([
//   {    
//       title:"Item1",
//       date: new Date(2021, 11, 28)
//   }
// ])
// function newProductHandler(data){
//   let newList = product;
//   newList.push({
//     title: data.title,
//     date: new Date(data.date)
//   });
//   console.log(newList);
//   setProduct(newList);
// }