import "./app-info.css";

const AppInfo = () => {
    return (
        <div className="app-info main-page">
            <div className="menu-bar-white">
                <div className = "img-menu-bar-white"></div>
                <button className="opacity-btn-white">Coffee house</button>
                <button className="opacity-btn-white">Our coffee</button>
                <button className="opacity-btn-white-plesure">For your plesure</button>
            </div>
            <h1 className="white-text-h1">Everything You Love About Coffee</h1>
            <div className="rectangle-logo"></div>
            <h2 className="white-text">We makes every day full of energy and taste</h2>
            <h3 className="white-text">Want to try our beans?</h3>
            <button className="white-btn">More</button>
        </div> 
    )
}

export default AppInfo;