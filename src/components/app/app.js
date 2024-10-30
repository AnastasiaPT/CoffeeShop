import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AboutUs from '../about-us/about-us';
import Ourbest from '../our-best/our-best';
import HeaderCoffee from '../header-coffee/header-coffee';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import CoffeeList from '../coffee-list/coffee-list';
import Footer from '../footer/footer'

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Aromatico Coffee', price: 6.99, description: 'good', country: 'Brasil',id: 1},
                {name: 'Aromatico Coffee', price: 7.99, description: 'so so', country: 'Kenya', id: 2},
                {name: 'Aromatico Coffee', price: 8.99, description: 'excilent', country: 'Columbia', id: 3},
                {name: 'Lavatio Coffee', price: 6.99, description: 'good', country: 'Brasil',id: 4},
                {name: 'Lavatio Coffee', price: 7.99, description: 'so so', country: 'Kenya', id: 5},
                {name: 'Lavatio Coffee', price: 8.99, description: 'excilent', country: 'Columbia', id: 6}
            ],
            term: '',
            filterUp: 'all',
            modalOn: false,
            CoffeeHouse: false,
            OurCoffee: true,
            Plesure: false
        }
        this.maxId = 6;
    }

    searchEmp = (items,term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterUp = (prop)=> {
        this.setState({filterUp: prop})
    }

    VisibleFilter = (items,filtr) => {
        if(filtr === 'Sal') {
            return items.filter(item => item.price > 1000);
        }else if(filtr === 'Rise') {
            return items.filter(item => item.rise);
        }
        
        return items;        
    }

    render() {
        const {data, term, filterUp} = this.state;
        const {CoffeeHouse, OurCoffee, Plesure} = this.state;
        const VisibleData = this.searchEmp(data, term)
        const VisiblLevelUpData = this.VisibleFilter(VisibleData, filterUp)
        return (
            <div className="app">
                {CoffeeHouse && <div className="CoffeeHouse">
                    <AppInfo/>
                    <AboutUs/>
                    <Ourbest data={VisiblLevelUpData}/>
                </div>}
                {OurCoffee && <div className = "Ourcoffee">
                     <HeaderCoffee/>
                     <div className="search-panel">
                         <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                         <AppFilter onFilterUp={this.onFilterUp}/>
                    </div>
                
                   <CoffeeList  data={VisiblLevelUpData}/>
                   <Footer/> 
                </div>}
            </div>
        );
    }
}

export default App;
