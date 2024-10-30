import { Component } from 'react';
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filt: 'All'
        }

   }
    onLevelUp = (e) => {
        this.setState({filt: e.currentTarget.getAttribute('data-toggle')});
        this.props.onFilterUp(e.currentTarget.getAttribute('data-toggle'));
    } 
   
    render() {

    return (
        <div className="btn-group">
            <button type="button"
                    className={"btn" + ((this.state.filt === 'All') ?' btn-light' : ' btn-outline-light')}
                    onClick={this.onLevelUp}
                    data-toggle="All">
                    Все сотрудники
            </button>
            <button type="button"
                    className={"btn" + ((this.state.filt === 'Rise') ?' btn-light' : ' btn-outline-light')}
                    onClick={this.onLevelUp}
                    data-toggle="Rise">
                    На повышение
            </button>
            <button type="button"
                    className={"btn" + ((this.state.filt === 'Sal') ?' btn-light' : ' btn-outline-light')}
                    onClick={this.onLevelUp}
                    data-toggle="Sal">
                    З/П больше 1000$
            </button>
        </div>
    )};
}

export default AppFilter;