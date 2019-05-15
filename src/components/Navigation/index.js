import React from 'react';
import { Link } from 'react-router-dom';
import { homebtn, signupbtn, loginbtn, container, noBullet, item } from './style';

const Navigation = () =>

//<div style={css.}></div>
<div style={container}>
  
  <ul style={noBullet}>
    <li style={item}>
      <Link to={'/'}><button style={homebtn}> HOME </button> </Link>
    </li>
    <li style={item}>
      <Link to={'/signup'}><button style={signupbtn}> SIGN UP </button> </Link>
    </li>
    <li style={item}>
      <Link to={'/auth'}><button style={loginbtn}>LOG IN</button> </Link>
    </li>

  </ul>
</div>

export default Navigation;
