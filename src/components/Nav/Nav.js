import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';


import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleLocation = this.handleLocation.bind(this);
        this.logoutButton = this.logoutButton.bind(this);
    }

    logoutButton() {
        axios.post('/api/auth/logout')
        .then( ()=>{
            this.props.history.push('/');
        })
    }

    handleLocation() {
        const whereAmI = this.props.location.pathname
        if ( whereAmI === '/dash') {
            return(
                <h3>
                    Dashboard
                </h3>
            )
        } else if ( whereAmI === '/profile' ) {
            return(
                <h3>
                    Profile
                </h3>
            )
        } else if ( whereAmI === '/search' ) {
            return(
                <h3>
                    Search
                </h3>
            )
        }
    }
    

    render() {
        if (this.props.location.pathname !== '/') {
            return(
                <section>
                    <section className='navbar'>
                        <div className='nav-content'>
                            <h2>Helo</h2>
                            <Link to='/dash'>
                                <img src={require("./Navages/home.png")} alt="homepage"/>
                            </Link>
                            <Link to='/search'>
                                <img src={require("./Navages/search.png")} alt="searchpage"/>
                            </Link>
                        </div>
                        <div className='location'>
                            {this.handleLocation()}
                        </div>
                        <div className='logout-box'>
                            <button className='logout' onClick={this.logoutButton}>
                                Logout
                            </button>
                        </div>
                    </section>
                </section>
            )
        } else {
            
            return null
            
        }
    }
}

export default withRouter(Nav);