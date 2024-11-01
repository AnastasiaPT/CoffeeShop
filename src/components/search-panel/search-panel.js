import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
   constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

   }

   onUpdateSearch = (e) => {
     const term = e.target.value;
     this.setState({term});
     this.props.onUpdateSearch(term);

   } 

    render() {
         return (
          <div className = "form-control">
               <div className = "lookingFor" >Looking for </div>
               <input type="text"
                     className="search-input"
                     placeholder="Start typing here..."
                     value={this.state.term}
                     onChange={this.onUpdateSearch}
               />
          </div>
)};
}
    
    
    


export default SearchPanel;