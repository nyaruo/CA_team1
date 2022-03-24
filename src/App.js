import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Header from './components/modules/Header';
import Timer from './components/pages/TimerPage';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

import './stylesheets/App.css';
import './stylesheets/signup-in.css';

function App() {
  return (
    <div className="App">
        <Router>
          <main>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/timer" component={Timer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </main>
        </Router>
    </div>
  )
}

export default App;
