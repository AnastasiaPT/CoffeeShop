import CoffeeListItem from "../coffee-list-item/coffee-list-item";
import "./our-best.css";

const Ourbest = ({data}) => {
    const BestFilter = (items) => {
           return items.filter(item => item.description === 'excilent');
        }

    const elements = BestFilter(data).map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeListItem 
                key={id} 
                {...itemProps}/>
        )
    })

    return (
        <div className="our-best-page">
            <h2 className="black-text-best">Our best</h2>
            <div className="container-our-best">
                {elements}
            </div>
            
        </div> 
    )
}

export default Ourbest;
