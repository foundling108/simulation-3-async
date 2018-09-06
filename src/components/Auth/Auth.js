import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        return(
            <section className='auth-page'>
                <div className='auth-box'>
                    <img src={require("./logo.png")} alt="winky-face" className='winky-face'/>
                    <h1>Helo</h1>
                        <Link to='/dash'>
                    <button className='log-res'>
                            Login / Register
                    </button>
                        </Link>
                </div>
            </section>
        )
    }
}

export default Auth;