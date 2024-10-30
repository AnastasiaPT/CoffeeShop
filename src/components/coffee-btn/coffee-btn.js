import "./coffe-btn.css";

const CoffeeBtn = (props) => {

    const {color} = props;
    const classMenuBar = "menu-bar-" + color
    const imgMenuBar = "img-menu-bar-" + color
    const opacityBtn = "opacity-btn-" + color
    const opacityBtnPl = "opacity-btn-plesure-" + color

    return (
        <div className = {classMenuBar}>
                <div className = {imgMenuBar}></div>
                <button className = {opacityBtn}>Coffee house</button>
                <button className = {opacityBtn} >Our coffee</button>
                <button className = {opacityBtnPl} >For your plesure</button>
            </div>
    )
}

export default CoffeeBtn;