import { useState } from "react";
export default function ProductForm(props){
    const[date,setDate]=useState('');
    const[title,setTitle]=useState('');
    
    function addHandler(e){
        const productData={
            title:title,
            date:date
        }
        props.onProductForm(productData) //calling parent function
    }
    return(
        <div className="ProductForm">
           <div>
             <label>Date</label>
             <input type="date" value={date}  onChange={(e)=>setDate(e.target.value)} />
           </div> 
           <div className="mt-2">
             <label>Title</label>
             <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
           </div>
           <div className="text-center">
            <button type="submit" className="btn btn-primary mt-2" onClick={addHandler}>ADD</button>
           </div>
        </div>
    )
}