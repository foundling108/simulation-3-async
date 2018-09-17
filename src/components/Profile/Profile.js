import React, {Component} from 'react';
import axios from 'axios';

import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: [],
            user_image: '',
            first_name: '',
            last_name: '',
            gender: '',
            hair_color: '',
            eye_color: '',
            hobby: '',
            birth_day: '',
            birth_month: '',
            birth_year: ''
         }

        this.componentDidMount = this.componentDidMount.bind(this);
         this.updateUser = this.updateUser.bind(this);
         this.onUpdate = this.onUpdate.bind(this);
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
        })
    }

    onUpdate(e) {
        this.setState({
            [e.target.name]: e.target.value
        }) 
     }

    updateUser() {
        const { user_id, first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year } = this.state
        if( birth_day === 'select' || birth_month === 'select' || birth_year === 'select' ) return alert('Birth fields are required to update profile');

        let stuff = { first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year, user_id }
        axios.put(`/api/displayProfile/${user_id}`, stuff)
        .then(updated => {
            return alert('User info has been successfully updated')
        })

    }

    render() {
        return(
            <section>
                <section className='profile-page'>
                    <div className='profile-user-box' id='profile-user-card'>
                        <div id='profile-image'>
                            <img src={this.state.user_image} alt="profile-pic"/>
                        </div>
                        <h6>{this.state.first_name}</h6>
                        <h6 id='profile-last_name' >{this.state.last_name}</h6>
                        <button className='profile-buttons' id='update' onClick={this.updateUser}>Update</button>
                        <button className='profile-buttons' id='cancel' onClick={this.componentDidMount}>Cancel</button>
                    </div>
                    <section className='profile-user-box' id='profile-options-card'>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>First Name</p>
                            <input className='profile-input' type="text" value={this.state.first_name}/>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Last Name</p>
                            <input className='profile-input' type="text" value={this.state.last_name}/>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Gender</p>
                            <select name='gender' className="prof-selector" id="" value={this.state.gender} onChange={this.onUpdate}>
                                <option value="select">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Hair Color</p>
                            <select name='hair_color' className="prof-selector" id="" value={this.state.hair_color} onChange={this.onUpdate} >
                                <option value="select">Select</option>
                                <option value="brown">Brown</option>
                                <option value="blond">Blond</option>
                                <option value="black">Black</option>
                                <option value="red">Red</option>
                                <option value="white">White</option>
                                <option value="bald">Bald</option>
                            </select>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Eye Color</p>
                            <select name='eye_color' className="prof-selector" id="" value={this.state.eye_color} onChange={this.onUpdate}>
                                <option value="select">Select</option>
                                <option value="brown">Brown</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Hobby</p>
                            <select name='hobby' className="prof-selector" id="" value={this.state.hobby} onChange={this.onUpdate}>
                                <option value="select">Select</option>
                                <option value="music">Music</option>
                                <option value="fishing">Fishing</option>
                                <option value="gardening">Gardening</option>
                                <option value="bird watching">Bird Watching</option>
                                <option value="reading">Reading</option>
                                <option value="music">Music</option>
                                <option value="crafts">Crafts</option>
                                <option value="video games">Video Games</option>
                                <option value="collecting">Collecting</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Birth Day</p>
                            <select name='birth_day' className="prof-selector" id="" value={this.state.birth_day} onChange={this.onUpdate}>
                                    <option value="select">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                            </select>
                        </div>
                        <div className='prof-selector-box'>
                            <p className='prof-p-tags'>Birth Month</p>
                            <select name='birth_month' className="prof-selector" id="" value={this.state.birth_month} onChange={this.onUpdate}>
                                <option value="select">Select</option>
                                    <option value="Jan">January</option>
                                    <option value="Feb">February</option>
                                    <option value="Mar">March</option>
                                    <option value="Apr">April</option>
                                    <option value="May">May</option>
                                    <option value="Jun">June</option>
                                    <option value="Jul">July</option>
                                    <option value="Aug">August</option>
                                    <option value="Sep">September</option>
                                    <option value="Oct">October</option>
                                    <option value="Nov">November</option>
                                    <option value="Dec">December</option>
                            </select>
                            </div>
                            <div className='prof-selector-box'>
                                <p className='prof-p-tags'>Birth Year</p>
                                <select name='birth_year' className="prof-selector" id="" value={this.state.birth_year} onChange={this.onUpdate}>
                                    <option value="select">Select</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                </select>
                            </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Profile;