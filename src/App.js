import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/hats' component={HatsPage} />
         
      </Switch>
         <HomePage />       
    </div>
  );
}

export default App;
