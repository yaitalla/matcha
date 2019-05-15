import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupPage from '../signup/SignupPage';
import Auth from '../auth/Auth';
import Ftp from '../ftp/Ftp';
import Navigation from '../Navigation/';
import Home from '../home';
import Maquette from '../maquettes/';
import Menu from '../menu';
import Bonus from '../bonus';
import {title, titleDiv, global, imgDiv} from './style';

//import photo from './picture.jpeg';
// <div style={imgDiv}>
// <img src={photo}></img>
// </div>

const Global = () =>
  <Router>
    <div >
      <Navigation/>
      <Route exact path={'/signup'} component={SignupPage}/>
      <Route exact path={'/menu'} component={Menu}/>
      <Route exact path={'/ftp'} component={Ftp}/>
      <Route exact path={'/auth'} component={Auth}/>
      <Route exact path={'/maquette1'} component={Home}/>
      <Route exact path={'/maquette2'} component={Maquette}/>
      <div style={titleDiv}>
        <h1 style={title}>Matcha !</h1>
      </div>
     
    </div>
  </Router>

export default Global;
