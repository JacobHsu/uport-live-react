import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// Styles
//import '../../semantic/dist/semantic.min.css'
import './App.css';

import store from './store'
import {
  Home
} from '../components'


const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
    </Router>
  </Provider>
)    

export default App;
