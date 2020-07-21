import React from 'react';
import HomePic from '../img/Logo-removebg-preview.png';
import SearchPic from '../img/Search.png';
import StarPic from '../img/star.png';
import StarSelectPic from '../img/starSelect.png';

const Home = () => {
    return (
        <div className="container">
            <h4 className="center"></h4>
            <img src={HomePic} width="100" height="100" class="center"></img>
            <h1>Welcome to ElectroLife</h1>
            <br />
            <h4>Homebase of Electronics</h4>
            <label><b>Quick Search:</b>
                <input name = "name" type = "text" autocomplete = "on" size = "25"></input>
                <button>
                    <img src={SearchPic} width="50" height="50" class="center"></img>
                </button>
            </label>
            <br/>
            <img src={StarPic} width="10" height="10" class="center"></img>
            <img src={StarSelectPic} width="10" height="10" class="center"></img>
        </div>
    )
}

export default Home