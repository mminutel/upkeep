import React, { Component } from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="./main">Upkeep</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={1} title="Applications">
                <MenuItem eventKey={1.1}>ERW</MenuItem>
                <MenuItem eventKey={1.2}>POMS</MenuItem>
                <MenuItem eventKey={1.3}>CMIS</MenuItem>
                <MenuItem eventKey={1.4}>Internal</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">Contacts</NavItem>
            </Nav>
            {/*<Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>*/}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}

export default Header;
