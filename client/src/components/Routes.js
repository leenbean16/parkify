import React from 'react'
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import Body from './components/Body';
import Account from '../Account';
import Reservations from '../Reservations';
import AccountSettings from '../AccountSettings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Body}/>
      <Route path="/about" component={Account}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Body = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
<h2>Topics</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Routes;
