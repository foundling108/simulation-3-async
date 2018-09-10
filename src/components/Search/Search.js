import React, {Component} from 'react';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section className='search-page'>
                <div className='search-search'>
                    <select name="filter-by" id="search-filter">
                        <option value="select">Select</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="hair_color">Hair Color</option>
                        <option value="eye_color">Eye Color</option>
                        <option value="hobby">Hobby</option>
                        <option value="birth_day">Birth Day</option>
                        <option value="birth_month">Birth Month</option>
                        <option value="birth_year">Birth Year</option>
                    </select>
                    <input id='search-input' type="text"/>
                    <button className='search-button' id='search'>Search</button>
                    <button className='search-button' id='reset'>Reset</button>
                </div>
                <section className='search-friends-grid'>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
                        <button id='add-friend'>Add Friend</button>
                    </div>
                    <div className='friend-card' id='search-friend-card'>
                        <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                        <p className='friend-name' id='friend-first-name'>Friend's</p>    
                        <p className='friend-name' id='friend-last-name'>Name</p>
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