import "./header-coffee.css";
import "../app-info/app-info.css"

const HeaderCoffee = () => {
    return (
        <div className="header-coffee-main-page">
            <div className="menu-bar-white">
                <div className = "img-menu-bar-white"></div>
                <button className="opacity-btn-white">Coffee house</button>
                <button className="opacity-btn-white">Our coffee</button>
                <button className="opacity-btn-white-plesure">For your plesure</button>
            </div>
            <h2 className="white-text">Our Coffee</h2>
        </div> 
    )
}

export default HeaderCoffee;