import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <button className="login-button button-4 linkButton"><Link to="/learning">Leaning Characters</Link></button>
      &nbsp; | &nbsp;
      <button className="login-button button-4 linkButton"><Link to="/words">Common Words</Link></button>
      &nbsp; | &nbsp;
      <button className="login-button button-4 linkButton"><Link to="/studying">Studying Characters</Link></button>
      &nbsp; | &nbsp;
      <button className="login-button button-4 linkButton blackText"><span>Welcome, {props.user.name}</span></button>
      &nbsp; | &nbsp;
      <button className="login-button button-4 linkButton"><Link to="" onClick={handleLogOut}>Log Out</Link></button>
    </nav>
  );
}