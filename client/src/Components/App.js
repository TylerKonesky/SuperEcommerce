import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import Header from '../Components/Header/Header';
import Landing from '../Components/Landing/Landing';

import './App.css';

class App extends Component{
    render(){
        return(
          <div>
            <Header />
            <BrowserRouter>
                <div className="container">
                    <Route exact path="/" component={Landing}></Route>
                </div>
            </BrowserRouter>
          </div>
        )
      }
}

export default connect(null, actions)(App)
