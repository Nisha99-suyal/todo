import {Card} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ProductItems from './ProductItems';

export default function Products(props){

    return(
     <Card className=" mt-3">
        {props.items.map((item,i)=>{
            return (
                <div>
<ProductItems title={item.title} date={item.date} key={i} />
                </div>
                
            )
        })}
        
        {/* <ProductItems title={props.items[1].title} date={props.items[1].date}/>
        <ProductItems title={props.items[2].title} date={props.items[2].date} /> */}
     </Card>
    )
}
//     console.log('props'+props);
//     const[addProduct,setAddProduct]=useState(props.items)
//     useEffect(()=>{
// setAddProduct(props.items);
//     },[props.items])
// {
//     addProduct.map((x,index)=><ProductItems key={index} title={x.title} date={x.date} />)
//    }