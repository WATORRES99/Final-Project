import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { HousesList } from './Components/HousesList';
import LoginForm from './Components/LogIn'; 
import Display from './Components/FinalDisplay';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>

            <Link to="/housemodels">House Models</Link>
          </li>
          <li>
            <Link to="/homedesign">Design</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/homedesign'>
            <HomeDesign />
          </Route>
          <Route path='/housemodels'>
            <Housemodels />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Log In </h2>
      <LoginForm /> 
    </div>
  );
}

function Housemodels() {
  return (
    <div>
      <Display/>
    </div>
  );
}

function HomeDesign() {
  return (
    <div>
      <h2>Design Your Own Home</h2>
      <HousesList />
    </div>
  );
}
