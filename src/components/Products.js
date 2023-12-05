import { Card } from 'react-bootstrap';
import ProductItems from './ProductItems';

export default function Products(props) {
    return (
        <Card className=" mt-3">
            {props.items.map((item, i) => {
                return (
                    <div><ProductItems title={item.title} date={item.date} key={i} /></div>
                    )
            })}
        </Card>
)}