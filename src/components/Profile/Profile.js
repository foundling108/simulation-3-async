import React, {Component} from 'react';

import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section>
                <section className='profile-page'>
                    <div className='profile-user-box' id='profile-user-card'>
                        <div id='profile-image'>
                            <img src="https://robohash.org/doloremquesolutaaut.jpg?size=125x123" alt="profile-pic"/>
                        </div>
                        <h6>User's</h6>
                        <h6 id='profile-last_name' >Name</h6>
                        <button className='profile-buttons' id='update'>Update</button>
                        <button className='profile-buttons' id='cancel'>Cancel</button>
                    </div>
                    <section className='profile-user-box' id='profile-options-card'>
                        <div>
                            <p>First Name</p>
                            <input type="text"/>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text"/>
                        </div>
                        <div>
                            <p>Gender</p>
                            <select name='gender' className="prof-selector" id="">
                                <option value="select">select</option>
                                <option value="gender">Male</option>
                                <option value="gender">Female</option>
                            </select>
                        </div>
                        <div>
                            <p>Hair Color</p>
                            <select name='hair_color' className="prof-selector" id="">
                                <option value="select">select</option>
                                <option value="hair_color">Brown</option>
                                <option value="hair_color">Blond</option>
                                <option value="hair_color">Black</option>
                                <option value="hair_color">Red</option>
                                <option value="hair_color">White</option>
                                <option value="hair_color">Bald</option>
                            </select>
                        </div>
                        <div>
                            <p>Eye Color</p>
                            <select name='eye_color' className="prof-selector" id="">
                                <option value="select">select</option>
                                <option value="eye_color">Brown</option>
                                <option value="eye_color">Blue</option>
                                <option value="eye_color">Green</option>
                            </select>
                        </div>
                        <div>
                            <p>Hobby</p>
                            <select name='hobby' className="prof-selector" id="">
                                <option value="select">select</option>
                                <option value="hobby">Music</option>
                                <option value="hobby">Fishing</option>
                                <option value="hobby">Gardening</option>
                                <option value="hobby">Bird Watching</option>
                                <option value="hobby">Reading</option>
                                <option value="hobby">Music</option>
                                <option value="hobby">Crafts</option>
                                <option value="hobby">Video Games</option>
                                <option value="hobby">Collecting</option>
                                <option value="hobby">Other</option>
                            </select>
                        </div>
                        <div>
                            <p>Birth Day</p>
                            <select name='birth_day' className="prof-selector" id="">
                                    <option value="select">select</option>
                                    <option value="birth_day">1</option>
                                    <option value="birth_day">2</option>
                                    <option value="birth_day">3</option>
                                    <option value="birth_day">4</option>
                                    <option value="birth_day">5</option>
                                    <option value="birth_day">6</option>
                                    <option value="birth_day">7</option>
                                    <option value="birth_day">8</option>
                                    <option value="birth_day">9</option>
                                    <option value="birth_day">10</option>
                                    <option value="birth_day">11</option>
                                    <option value="birth_day">12</option>
                                    <option value="birth_day">13</option>
                                    <option value="birth_day">14</option>
                                    <option value="birth_day">15</option>
                                    <option value="birth_day">16</option>
                                    <option value="birth_day">17</option>
                                    <option value="birth_day">18</option>
                                    <option value="birth_day">19</option>
                                    <option value="birth_day">20</option>
                                    <option value="birth_day">21</option>
                                    <option value="birth_day">22</option>
                                    <option value="birth_day">23</option>
                                    <option value="birth_day">24</option>
                                    <option value="birth_day">25</option>
                                    <option value="birth_day">26</option>
                                    <option value="birth_day">27</option>
                                    <option value="birth_day">28</option>
                                    <option value="birth_day">29</option>
                                    <option value="birth_day">30</option>
                                    <option value="birth_day">31</option>
                            </select>
                        </div>
                        <div>
                            <p>Birth Month</p>
                            <select name='birth_month' className="prof-selector" id="">
                                <option value="select">select</option>
                                <option value="birth_month">January</option>
                                <option value="birth_month">February</option>
                                <option value="birth_month">March</option>
                                <option value="birth_month">April</option>
                                <option value="birth_month">May</option>
                                <option value="birth_month">June</option>
                                <option value="birth_month">July</option>
                                <option value="birth_month">August</option>
                                <option value="birth_month">September</option>
                                <option value="birth_month">October</option>
                                <option value="birth_month">November</option>
                                <option value="birth_month">December</option>
                            </select>
                            <div>
                                <p>Birth Year</p>
                                <select name='birth_year' className="prof-selector" id="">
                                    <option value="select">select</option>
                                    <option value="birth_year">2018</option>
                                    <option value="birth_year">2017</option>
                                    <option value="birth_year">2016</option>
                                    <option value="birth_year">2015</option>
                                    <option value="birth_year">2014</option>
                                    <option value="birth_year">2013</option>
                                    <option value="birth_year">2012</option>
                                    <option value="birth_year">2011</option>
                                    <option value="birth_year">2010</option>
                                    <option value="birth_year">2009</option>
                                    <option value="birth_year">2008</option>
                                    <option value="birth_year">2007</option>
                                    <option value="birth_year">2006</option>
                                    <option value="birth_year">2005</option>
                                    <option value="birth_year">2004</option>
                                    <option value="birth_year">2003</option>
                                    <option value="birth_year">2002</option>
                                    <option value="birth_year">2001</option>
                                    <option value="birth_year">2000</option>
                                    <option value="birth_year">1999</option>
                                    <option value="birth_year">1998</option>
                                    <option value="birth_year">1997</option>
                                    <option value="birth_year">1996</option>
                                    <option value="birth_year">1995</option>
                                    <option value="birth_year">1994</option>
                                    <option value="birth_year">1993</option>
                                    <option value="birth_year">1992</option>
                                    <option value="birth_year">1991</option>
                                    <option value="birth_year">1990</option>
                                    <option value="birth_year">1989</option>
                                    <option value="birth_year">1988</option>
                                    <option value="birth_year">1987</option>
                                    <option value="birth_year">1986</option>
                                    <option value="birth_year">1985</option>
                                    <option value="birth_year">1984</option>
                                    <option value="birth_year">1983</option>
                                    <option value="birth_year">1982</option>
                                    <option value="birth_year">1981</option>
                                    <option value="birth_year">1980</option>
                                    <option value="birth_year">1979</option>
                                    <option value="birth_year">1978</option>
                                    <option value="birth_year">1977</option>
                                    <option value="birth_year">1976</option>
                                    <option value="birth_year">1975</option>
                                    <option value="birth_year">1974</option>
                                    <option value="birth_year">1973</option>
                                    <option value="birth_year">1972</option>
                                    <option value="birth_year">1971</option>
                                    <option value="birth_year">1970</option>
                                    <option value="birth_year">1969</option>
                                    <option value="birth_year">1968</option>
                                    <option value="birth_year">1967</option>
                                    <option value="birth_year">1966</option>
                                    <option value="birth_year">1965</option>
                                    <option value="birth_year">1964</option>
                                    <option value="birth_year">1963</option>
                                    <option value="birth_year">1962</option>
                                    <option value="birth_year">1961</option>
                                    <option value="birth_year">1960</option>
                                    <option value="birth_year">1959</option>
                                    <option value="birth_year">1958</option>
                                    <option value="birth_year">1957</option>
                                    <option value="birth_year">1956</option>
                                    <option value="birth_year">1955</option>
                                    <option value="birth_year">1954</option>
                                    <option value="birth_year">1953</option>
                                    <option value="birth_year">1952</option>
                                    <option value="birth_year">1951</option>
                                    <option value="birth_year">1950</option>
                                    <option value="birth_year">1949</option>
                                    <option value="birth_year">1948</option>
                                    <option value="birth_year">1947</option>
                                    <option value="birth_year">1946</option>
                                    <option value="birth_year">1945</option>
                                    <option value="birth_year">1944</option>
                                    <option value="birth_year">1943</option>
                                    <option value="birth_year">1942</option>
                                    <option value="birth_year">1941</option>
                                    <option value="birth_year">1940</option>
                                    <option value="birth_year">1939</option>
                                    <option value="birth_year">1938</option>
                                    <option value="birth_year">1937</option>
                                    <option value="birth_year">1936</option>
                                    <option value="birth_year">1935</option>
                                    <option value="birth_year">1934</option>
                                    <option value="birth_year">1933</option>
                                    <option value="birth_year">1932</option>
                                    <option value="birth_year">1931</option>
                                    <option value="birth_year">1930</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Profile;