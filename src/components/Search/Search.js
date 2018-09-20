import React, {Component} from 'react';
import axios from 'axios';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: '',
            first_name: '',
            last_name: '',
            searchBy: 'first_name',
            whichPage: '',
            allInfo: [],
            everyBody: [],
            buttons: []
        }

        this.mountToSearch = this.mountToSearch.bind(this);
        this.addButton = this.addButton.bind(this);
        this.removeButton = this.removeButton.bind(this);
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
            for(let i = 0; i < howManybuttons; i++){
                buttons.push(i)
            }
            this.setState({
                allInfo: res.data,
                everyBody: displayWhat,
                buttons: buttons
            })
        })
    }

    addButton(x) {
        axios.post('/api/addFriend', {user_id: x})
        .then(res => {
            this.mountToSearch()
        })
    }

    removeButton(x) {
        axios.post('/api/removeFriend', {user_id: x})
        .then(res => {
            this.mountToSearch()
        })
    }

    pagination(x) {
        console.log('1111', x)
        let pageArray = [];
        for(let i=((x - 1)*24); i<(x*24); i++){
            if(i<this.state.allInfo.length){
            pageArray.push(this.state.allInfo[i]);
            }
        }
        this.setState({
            everyBody: pageArray
        })
    }




    render() {

        const pages = this.state.buttons.map((el, i) => {
            return(
                <div className='page-buttons' key={el + i}>
                    <button>{el + 1}</button>
                </div>
            )
        })

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
                        <button id='add-friend'onClick={() => {this.addButton(el.user_id)}}>Add Friend</button>
                        :
                        <button id='remove-friend'onClick={() => {this.removeButton(el.user_id)}}>Remove Friend</button>
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
                    {pages}
                </div>
            </section>
        )
    }
}

export default Search;

//Eric Was here