import ProductDate from "./ProductDate";

export default function ProductItems(props){
    return(
        <div className="ProductItems">
            <div><ProductDate date={props.date}/></div>
            <h2>{props.title}</h2>
        </div>
    )
}