import React, { Component } from 'react';
import Navbar from './sections/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Cart from './sections/Cart'
import Error from './sections/ErrorPage'
import './App.css';

class App extends Component {
  state = {
    items: [
      {id: 1, content: 'Portable Computer', cost: 500},
      {id: 1, content: 'Headphone', cost: 300}
    ]
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Cart' component={Cart} />
            <Route path='/*' component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
