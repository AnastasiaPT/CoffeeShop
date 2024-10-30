import "./header-coffee.css";
import "../app-info/app-info.css"
import CoffeeBtn from "../coffee-btn/coffee-btn";

const HeaderCoffee = () => {
    return (
        <div className="header-coffee-main-page">
            <CoffeeBtn color={"white"} />
            <h2 className="white-text">Our Coffee</h2>
        </div> 
    )
}

export default HeaderCoffee;