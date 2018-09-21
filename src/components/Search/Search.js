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
            select: 'first_name',
            searchBy: '',
            whichPage: '',
            allInfo: [],
            everyBody: [],
            buttons: [],
            clicked: false
        }

        this.mountToSearch = this.mountToSearch.bind(this);
        this.addButton = this.addButton.bind(this);
        this.removeButton = this.removeButton.bind(this);
        this.pagination = this.pagination.bind(this);
        this.inputValue = this.inputValue.bind(this);
        this.selectValue = this.selectValue.bind(this);
        this.searchButton = this.searchButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }

    componentDidMount() {
        this.mountToSearch()
    }

    mountToSearch() {
        axios.get('/api/searchDisplay')
        .then(res => {
            this.howManyButtons()
            this.setState({
                allInfo: res.data,
                everyBody: res.data
            })
        })
    }

    howManyButtons() {
        axios.get('/api/getAllUsers')
        .then(res => {
            let howManybuttons = Math.ceil(res.data.length / 24);
            let buttons = [];
            for(let i = 0; i < howManybuttons; i++){
                buttons.push(i)
            }
            this.setState({
                buttons: buttons
            })
        })
    }

    pagination(x) {
        let pageArray = [];
        for(let i=((x - 1)*24); i<(x*24); i++){
            if(i<this.state.allInfo.length){
            pageArray.push(this.state.allInfo[i]);
            }
        }
        this.setState({
            everyBody: pageArray,
            clicked: true
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

    inputValue(x){
        this.setState({
            searchBy: x
        })
    }

    selectValue(x){
        this.setState({
            select: x
        })
    }

    resetButton(){
        this.mountToSearch()
    }

    searchButton() {
        const { searchBy, select, allInfo } = this.state
        let filteredInfo = []
        if( searchBy === '' ){
            return
        } else if( select === 'first_name'){
            for( let i=0; i<allInfo.length; i++ ){
                if(allInfo[i].first_name === searchBy){
                    console.log( '11111', allInfo[i].first_name, searchBy )
                    filteredInfo.push(allInfo[i])
                    console.log(filteredInfo)
                }
            }
        } else if( select === 'last_name'){
            for( let i=0; i<allInfo.length; i++ ){
                if(allInfo[i].last_name === searchBy){
                    filteredInfo.push(allInfo[i])
                }
            }
        }
        this.setState({
            everyBody: filteredInfo
        })
    }

    render() {

        const pages = this.state.buttons.map((el, i) => {
            return(
                <div className='page-buttons' key={el + i}>
                    <button id='page-num' onClick={() => {this.pagination(el + 1)}}>{el+1}</button>
                </div>
            )
        })

        const clickedPages = this.state.buttons.map((el, i) => {
            return(
                <div className='page-buttons' id='page-buttons-clicked' key={el + i}>
                    <button id='page-num-clicked' onClick={() => {this.pagination(el + 1)}}>Page {el+1}</button>
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
                    <select name="filter-by" id="search-filter" onChange={e => this.selectValue(e.target.value)}>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                    </select>
                    <input id='search-input' type="text" onChange={e => this.inputValue(e.target.value)}/>
                    <button className='search-button' id='search'onClick={this.searchButton}>Search</button>
                    <button className='search-button' id='reset' onClick={this.resetButton}>Reset</button>
                </div>
                <section className='search-friends-grid'>
                    {otherUsers}
                </section>
                <div className='page-bar'>
                    {
                        this.state.clicked === false
                        ?
                        pages
                        :
                        clickedPages
                    }
                </div>
            </section>
        )
    }
}

export default Search;

//Eric Was here