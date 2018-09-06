import React, {Component} from 'react';

import './Dash.css';

class Dash extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section className='dash-page'>
                <section className='dash-content'>
                    <div className='dash-content-box' id='user-info-box'>
                        <div id='user-image'>
                            <img src="" alt="profile-pic"/>
                        </div>
                        <p className='user-name' >User's</p>
                        <p className='user-name' >Name</p>
                        <button id='edit-prof'>Edit Profile</button>
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
                            <p>Sorted by</p>
                            <select className='selector'>
                                <option value="First Name">First Name</option>
                                <option value="Last Name">Last Name</option>
                                <option value="Gender">Gender</option>
                                <option value="Hair Color">Hair Color</option>
                                <option value="Eye Color">Eye Color</option>
                                <option value="Hobby">Hobby</option>
                                <option value="Birth Day">Birth Day</option>
                                <option value="Birth Month">Birth Month</option>
                                <option value="Birth Year">Birth Year</option>
                            </select>
                        </div>
                        <div className='friends-grid'>
                            {/* <p>No recommendations</p> */}
                            <img src="" alt="friend-pic"/>
                            <p>Friend's Name</p>
                            <button>Add Friend</button>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Dash;