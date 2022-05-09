import React from "react";
import { NavLink } from "react-router-dom";
import Movies from "./Movies";

const linkStyles = {
  display: 'inline-block',
  width: '50px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',  
  color: 'white',
}

function NavBar() {
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'darkBlue'
        }}>
          Home
        </NavLink>
        <NavLink
         to='/movies'
         exact
         style={linkStyles}
         activeStyle={{
           background: 'darkBlue'
         }}>
           Moives
         </NavLink>
         <NavLink
          to='actors'
          exact
          style={linkStyles}
          activeStyle={{
            background: 'darkBlue'
          }}>
            Actors
          </NavLink>
         <NavLink
          to='/directors'
          exact
          style={linkStyles}
          activeStyle={{
            background: 'darkBlue',
          }}>
           Directors
        </NavLink>
    </div>
  )
}

export default NavBar;
