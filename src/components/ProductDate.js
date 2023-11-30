export default function ProductDate(props){
    const month = props.date.toLocaleString('default', { month: 'long' });
    return (
        <div className="date-item">
            <div className="month">{month}</div>
            <div className="year">{props.date.getFullYear()}</div>
            <div className="date">{props.date.getDate()}</div>
        </div>
    )
}