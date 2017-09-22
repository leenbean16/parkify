import React, { Component } from 'react';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import FormWrapper from './components/FormWrapper';
import Account from './components/Account';
import Body from './components/Body';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

class App extends Component {
    render() {
    return (
            <div id='app-container'>
                <Nav />
               <Router>
                  <div>
                     <Route exact path="/login" component={FormWrapper}/>
                     <Route exact path="/account" component={Account}/>
                     {/*<Route path="/about" component={Account}/>*/}
                     {/*<Route path="/topics" component={Topics}/>*/}
                  </div>
               </Router>
                <PageFooter />
            </div>           
        )
    }
}

export default App;
