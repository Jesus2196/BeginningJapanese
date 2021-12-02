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
      <Link to="/learning">Leaning Characters</Link>
      &nbsp; | &nbsp;
      <Link to="/studying">Studying Characters</Link>
      &nbsp; | &nbsp;
      <Link to="/words">Common Words</Link>
      &nbsp; | &nbsp;
      <Link to="/flashCards">Flash Cards</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}