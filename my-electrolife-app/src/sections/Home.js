import React from 'react';
import HomePic from '../img/Logo-removebg-preview.png';
import SearchPic from '../img/Search.png';
import CartPic from '../img/Cart-removebg-preview.png';
/* import StarPic from '../img/star.png';
import StarSelectPic from '../img/starSelect.png'; */
import PC from '../img/COMP.png';
import Desktop from '../img/Desktop-Computer-Transparent-Background.png';
import Headphones from '../img/Headphones-Transparent-Background.png';

const Home = () => {
    return (
        <div className="container">
            <h4 className="center"></h4>
            <img src={HomePic} width="100" height="100" class="center"></img>
            <h1>Welcome to ElectroLife</h1>
            <br />
            <h4>Homebase of Electronics</h4>
            <div class="container">
                <label><b>Quick Search:</b>
                    <input name = "name" type = "text" autocomplete = "on" size = "25"></input>
                    <button>
                        <img src={SearchPic} width="50" height="50" class="center"></img>
                    </button>
                </label>
            </div>
            <br/>
            {/* <img src={StarPic} width="10" height="10" class="center"></img>
            <img src={StarSelectPic} width="10" height="10" class="center"></img> */}
            <div class="container" id="third">
                <div class="container-md border bg-danger text-black">
                    <div class="row p-2">
                        <div class="container-md p-3 my-3 col-sm-4 pl-8 border bg-white">
                            <img src={PC} width="50" height="50" class="center"></img>
                            <br/>
                            <b>Something that compute</b>
                            <br/>
                            <a class="card-link" data-toggle="collapse" href="#item1"><u>DETAILS</u></a>
                        </div>
                        <div class="container-md p-3 my-3 col-sm-4 pl-8 border bg-danger">
                            <img src={Headphones} width="50" height="50" class="center"></img>
                            <br/>
                            <b class="text-white">Something Something to Listen to</b>
                            <br/>
                            <a class="card-link" data-toggle="collapse" href="#item2"><u>DETAILS</u></a>
                        </div>
                        <div class="container-md p-3 my-3 col-sm-4 pl-8 border bg-white">
                            <img src={Desktop} width="70" height="50" class="center"></img>
                            <br/>
                            <b>Something to play with</b>
                            <br/>
                            <a class="card-link" data-toggle="collapse" href="#item3"><u>DETAILS</u></a>
                        </div>
                    </div>
                </div>

                <div id="accordion">
                    <div class="card">
                        <div id="item1" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <div class="row p-2">
                                    <div class="container-md col-sm-6 pl-2 border bg-danger">
                                        <img src={PC} width="200" height="200" class="center"></img>
                                    </div>
                                    <div class="col-sm-6 pl-2 left">
                                        <p className="center">This is a Portable Computer!</p>
                                        <br/>
                                        <p class = "btn red"><b>+500$</b>
                                            <img src={CartPic} width="30" height="30" class="center"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div id="item2" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <div class="row p-2">
                                    <div class="container-md col-sm-6 pl-2 border bg-danger">
                                        <img src={Headphones} width="200" height="200" class="center"></img>
                                    </div>
                                    <div class="col-sm-6 pl-2 left">
                                        <p className="center">This is a Headphones!</p>
                                        <br/>
                                        <p class = "btn red" onClick = 'alert("hi")'><b>+300$</b>
                                            <img src={CartPic} width="30" height="30" class="center"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div id="item3" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <div class="row p-2">
                                    <div class="container-md col-sm-6 pl-2 border bg-danger">
                                        <img src={Desktop} width="250" height="150" class="center"></img>
                                    </div>
                                    <div class="col-sm-6 pl-2 left">
                                        <p className="center">This is a Desktop Computer!</p>
                                        <br/>
                                        <p class = "btn red"><b>+900$</b>
                                            <img src={CartPic} width="30" height="30" class="center"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home