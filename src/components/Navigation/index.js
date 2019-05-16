import React from 'react';
import { Link } from 'react-router-dom';
import { homebtn, signupbtn, loginbtn, container, noBullet, item, btn } from './style';

const Navigation = () =>

//<div style={css.}></div>
<div style={container}>
  
  <ul style={noBullet}>
    <li style={item}>
      <Link to={'/'}><button style={btn}> HOME </button> </Link>
    </li>
    <li style={item}>
      <Link to={'/signup'}><button style={btn}> SIGN UP </button> </Link>
    </li>
    <li style={item}>
      <Link to={'/auth'}><button style={btn}>LOG IN</button> </Link>
    </li>

  </ul>
</div>

export default Navigation;
