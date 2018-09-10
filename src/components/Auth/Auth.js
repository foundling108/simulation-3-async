import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import './Auth.css';

class Auth extends Component {

    render() {
        function login() {
            let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
            let redirectUri = encodeURIComponent(`http://localhost:4000/auth/callback`);
        
            window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
        }
        return(
            <section className='auth-page'>
                <div className='auth-box'>
                    <img src={require("./logo.png")} alt="winky-face" className='winky-face'/>
                    <h1>Helo</h1>
                        <Link to='/dash'>
                    <button onClick={login} className='log-res'>
                            Login / Register
                    </button>
                        </Link>
                </div>
            </section>
        )
    }
}

export default Auth;