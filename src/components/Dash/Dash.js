import React, {Component} from 'react';

import './Dash.css';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.toProfilePage = this.toProfilePage.bind(this);
    }

    toProfilePage() {
        this.props.history.push('/profile')
    }


    render() {
        return(
            <section className='dash-page'>
                <section className='dash-content'>
                    <div className='dash-content-box' id='user-info-box'>
                        <div id='user-image'>
                            <img src="https://robohash.org/doloremquesolutaaut.jpg?size=125x123" alt="user-pic"/>
                        </div>
                        <p className='user-name' >User's</p>
                        <p className='user-name' >Name</p>
                        <button onClick={this.toProfilePage} id='edit-prof'>Edit Profile</button>
                    </div>
                    <div className='dash-content-box' id='welcome-text-box'>
                        <p id='welcome-text'>
                            Welcome to Helo! 
                            Find recommended friends based on your similarities, and even search for them by name. 
                            The more you update your profile, the better the recommendations we can make!
                        </p>
                    </div>
                    <section className='dash-content-box' id='friends-list'>
                        <div className='rec-fri-box'>
                            <h4>Recommended Friends</h4>
                        </div>
                        <div className='select-box'>
                            <p id='sorted-by'>Sorted by</p>
                            <select className='selector'>
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
                        </div>
                        <div className='friends-grid'>
                            {/* <p>No recommendations</p> */}
                            <div className='friend-card'>
                                <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                                <p className='friend-name' id='friend-first-name'>Friend's</p>    
                                <p className='friend-name' id='friend-last-name'>Name</p>
                                <button id='add-friend'>Add Friend</button>
                            </div>
                            <div className='friend-card'>
                                <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                                <p className='friend-name' id='friend-first-name'>Friend's</p>    
                                <p className='friend-name' id='friend-last-name'>Name</p>
                                <button id='add-friend'>Add Friend</button>
                            </div>
                            <div className='friend-card'>
                                <img src="https://robohash.org/autdoloresaspernatur.bmp?size=125x123" alt="friend-pic"/>
                                <p className='friend-name' id='friend-first-name'>Friend's</p>    
                                <p className='friend-name' id='friend-last-name'>Name</p>
                                <button id='add-friend'>Add Friend</button>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Dash;