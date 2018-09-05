import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { logout } from './../../dux/reducer';

import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleLocation = this.handleLocation.bind(this);
        this.logoutButton = this.logoutButton.bind(this);
    }

    logoutButton() {
        axios.get('/api/auth/logout')
        .then( ()=>{
            this.props.logout()
            this.props.history.push('/');
        })
    }

    handleLocation() {
        const whereAmI = this.props.location.pathname
        if ( whereAmI === '/dash') {
            return(
                <h2>
                    Dashboard
                </h2>
            )
        } else if ( whereAmI === '/profile' ) {
            return(
                <h2>
                    Profile
                </h2>
            )
        } else if ( whereAmI === '/search' ) {
            return(
                <h2>
                    Search
                </h2>
            )
        }
    }
    

    render() {
        if (this.props.location.pathname !== '/') {
            return(
                <section>
                    <section className='navbar'>
                        <div className='nav-content'>
                            <h1>Helo</h1>
                            <Link to='/dash'>
                                <img src={require("./Navages/home.png")} alt="homepage"/>
                            </Link>
                            <Link to='/search'>
                                <img src={require("./Navages/search.png")} alt="searchpage"/>
                            </Link>
                        </div>
                        <div className='location'>
                            <h2>
                                {this.handleLocation()}
                            </h2>
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

function mapStateToProps(reduxState) {
    return {
        logout: reduxState.logout
    }
}

 

export default withRouter(connect(mapStateToProps, {logout}) (Nav));