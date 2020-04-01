import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Styles
//import '../../semantic/dist/semantic.min.css'
import '../semantic/dist/semantic.min.css'
import './App.css';

import {
  Home
} from '../components'


const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
  </Router>
)    

export default App;
