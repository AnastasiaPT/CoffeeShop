import CoffeeListItem from "../coffee-list-item/coffee-list-item";

import './coffee-list.css';

const CoffeeList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeListItem 
                key={id} 
                {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default CoffeeList;