import React, {Component} from 'react';
import axios from 'axios';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: '',
            everyBody: [],
            buttons: []
        }
    }

    componentDidMount() {
        axios.get('/api/searchDisplay')
        .then(res => {
            console.log(res.data)
            let displayWhat = []
            for(let i=0; i<24; i++){
                displayWhat.push(res.data[i])
            }
            let howManybuttons = Math.ceil(res.data.length / 24);
            let buttons = [];
            for(let i = 2; i < howManybuttons + 1; i++){
                buttons.push(i)
            }
            this.setState({
                buttons: buttons,
                everyBody: displayWhat
            })
        })
    }


    render() {
        return(
            <section className='search-page'>
                <div className='search-search'>
                    <select name="filter-by" id="search-filter">
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                    </select>
                    <input id='search-input' type="text"/>
                    <button className='search-button' id='search'>Search</button>
                    <button className='search-button' id='reset'>Reset</button>
                </div>
                <section className='search-friends-grid'>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <div className='friend-name'>
                            <p id='friend-first-search'>Friend's</p>    
                            <p id='friend-last-search'>Name</p>
                        </div>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                </section>
                <div className='page-bar'>
                    <button className='page-buttons'>1</button>
                    <button className='page-buttons'>2</button>
                    <button className='page-buttons'>3</button>
                </div>
            </section>
        )
    }
}

export default Search;

//Eric Was here