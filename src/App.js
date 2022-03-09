import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/modules/Header';
import Home from './components/pages/Home';
import Menu1 from './components/pages/Menu1';
import Menu2 from './components/pages/Menu2';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/menu1" component={Menu1} />
            <Route path="/menu2" component={Menu2} />
          </main>
        </Router>
    </div>
  )
}

export default App;