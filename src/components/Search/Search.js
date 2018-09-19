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

        this.mountToSearch = this.mountToSearch.bind(this);
    }

    componentDidMount() {
        this.mountToSearch()
    }

    mountToSearch() {
        axios.get('/api/searchDisplay')
        .then(res => {
            let displayWhat = []
            for(let i=0; i<24; i++){
                displayWhat.push(res.data[i])
            }
            let howManybuttons = Math.ceil(res.data.length / 24);
            let buttons = [];
            for(let i = 0; i < howManybuttons + 1; i++){
                buttons.push(i)
            }
            this.setState({
                buttons: buttons,
                everyBody: displayWhat
            })
        })
    }


    render() {

        const otherUsers = this.state.everyBody.map((el, i) => {
            return(
                <div className='friend-card' id='search-friend-card' key={el + i}>
                    <img src={el.user_image} alt="friend-pic"/>
                    <div className='friend-name'>
                        <p id='friend-first-search'>{el.first_name}</p>    
                        <p id='friend-last-search'>{el.last_name}</p>
                    </div>
                    { el.isFriend === true 
                        ?
                        <button id='add-friend'>Add Friend</button>
                        :
                        <button id='remove-friend'>Remove Friend</button>
                    }
                </div>
            )
        })

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
                    {otherUsers}
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