import React, {Component} from 'react';
import axios from 'axios';

import './Dash.css';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: [],
            user_id: '',
            user_image: '',
            first_name: '',
            last_name: '',
            gender: '',
            hair_color: '',
            eye_color: '',
            hobby: '',
            birth_day: '',
            birth_month: '',
            birth_year: '',
            everyBody: [],
            filteredPeople: [],
            select: ''
        }

        this.resetDisplay = this.resetDisplay.bind(this);
        this.toProfilePage = this.toProfilePage.bind(this);
        this.addButton = this.addButton.bind(this);
        this.filterBy = this.filterBy.bind(this);
    }

    componentDidMount() {
        axios.get('/api/displayUser')
        .then(res => {
            this.setState({
                userInfo: res.data,
                user_id: res.data[0].user_id,
                user_image: res.data[0].user_image,
                first_name: res.data[0].first_name,
                last_name: res.data[0].last_name,
                gender: res.data[0].gender,
                hair_color: res.data[0].hair_color,
                eye_color: res.data[0].eye_color,
                hobby: res.data[0].hobby,
                birth_day: res.data[0].birth_day,
                birth_month: res.data[0].birth_month,
                birth_year: res.data[0].birth_year
            })
    
            axios.get('/api/users')
            .then(res => {
               this.setState({
                   everyBody: res.data,
                   filteredPeople: res.data
               })
            })
        })
    }

    resetDisplay() {
        axios.get('/api/users')
        .then(res => {
           this.setState({
               everyBody: res.data
           })
        })
    }

    toProfilePage() {
        this.props.history.push('/profile')
    }

    addButton(x) {
        axios.post('/api/addFriend', {user_id: x})
        .then(res => {
            this.setState({
                everyBody: res.data
            })
            this.resetDisplay()
        })
    }

    filterBy = (value) => {
        this.setState({
            select: value
        })
        let user_info = this.state.userInfo[0][value];

        let filteredPeeps = this.state.everyBody.filter(el => {
            return (
                el[value].toLowerCase() === user_info
            )
        })
        this.setState({
            filteredPeople: filteredPeeps
        })
    }

    render() {

        const allUsers = this.state.filteredPeople.map((el, i) => {
            return(
                <div className='friend-card' key={el + i}>
                    <img src={el.user_image} alt="friend-pic" id='friend-pic'/>
                    <div className='friend-name' >
                        <p id='friend-first-name'>{el.first_name}</p>    
                        <p id='friend-last-name'>{el.last_name}</p>
                    </div>
                    <button id='add-friend'onClick={() => {this.addButton(el.user_id)}}>Add Friend</button>
                </div>
            )
        })

        return(
            <section className='dash-page'>
                <section className='dash-content'>
                    <div className='dash-content-box' id='user-info-box'>
                        <div id='user-image'>
                            <img src={this.state.user_image} alt="user-pic"/>
                        </div>
                        <p className='user-name' >{this.state.first_name}</p>
                        <p className='user-name' >{this.state.last_name}</p>
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
                            <select className='selector' name='sortBy' value={this.state.select} onChange={e => this.filterBy(e.target.value)} >
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
                        </div>
                        <div className='friends-grid'>
                            {this.state.filteredPeople.length === 0 ? <p id="no-rec">No recommendations</p> :allUsers}
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Dash;