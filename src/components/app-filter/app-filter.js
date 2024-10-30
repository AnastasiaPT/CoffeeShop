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
        const filtval = (this.state.filt === e.currentTarget.getAttribute('data-toggle')) ?
            'All' : e.currentTarget.getAttribute('data-toggle');
        this.setState({filt: filtval});
        this.props.onFilterUp(filtval);
    } 
   
    render() {

    return (
        <div className="btn-group">
             <div className = "or-filter" >Or filter </div>
            <button type="button"
                    className={"btn" + ((this.state.filt === 'Brasil') ?'-btn-border' : '-btn-shadow')}
                    onClick={this.onLevelUp}
                    data-toggle="Brasil">
                    Brazil
            </button>
            <button type="button"
                    className={"btn" + ((this.state.filt === 'Kenya') ?'-btn-border' : '-btn-shadow')}
                    onClick={this.onLevelUp}
                    data-toggle="Kenya">
                    Kenya
            </button>
            <button type="button"
                    className={"btn" + ((this.state.filt === 'Colum') ?'-btn-border' : '-btn-shadow')}
                    onClick={this.onLevelUp}
                    data-toggle="Colum">
                    Columbia
            </button>
        </div>
    )};
}

export default AppFilter;