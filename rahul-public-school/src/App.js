// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/landing" component={LandingPage} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/admissions" component={AdmissionsPage} />
        <Route path="/academics" component={AcademicsPage} />
        <Route path="/contact" component={ContactPage} />
        
      </Switch>
    </Router>
  );
}

export default App;
