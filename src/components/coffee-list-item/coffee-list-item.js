import './coffee-list-item.css';

const CoffeeListItem = (props) => {

    const {name, price} = props;

    return (
        <div className="cofee-list-item">
            <div className="coffee-img"></div>
            <div className="list-group-item-label">{name}</div>
            <div className="item-price">{price}</div>
        </div>
    )
}

export default CoffeeListItem;