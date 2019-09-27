import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import { Index } from './pages/index';
import { About } from './pages/about';
import { Contact } from './pages/contact';

function AppRouter() {
  return (
      <Router>
         <div>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
      </Router>
  );
}
export default AppRouter






