import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'components/Elements/Button';
import logo from 'images/Logo.png';
import purpleLogo from 'images/Purple-Logo.png';

// The Header has urls that have an active state and an inactive state.
// The Contact us button does not display on the home page because there
// Is already a contact us button on the home page
class Header extends Component {
  render() {
    const { props } = this;
    const hover = () => {
      console.log(this.className);
      console.log(this);
    };
    return (
      <div className={`header-wrapper ${props.location === '/' ? 'home' : 'general'}`}>
        <NavLink className="logo" to="/">
          <img src={props.location === '/' ? logo : purpleLogo} alt="KSU Robotics Logo" />
        </NavLink>
        <div className="nav-wrapper">
          <ul className="main-nav">
            <li>
              <NavLink exact activeClassName="current-url" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current-url" onMouseOver={hover} onFocus={hover} to="/About-Us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current-url" to="/Competitions">
                Competitions
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current-url" to="/Robots">
                Robots
              </NavLink>
            </li>
          </ul>
          <Button className={`primary ${props.location === '/' ? 'hidden' : ''}`}>Contact Us!</Button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Header;
