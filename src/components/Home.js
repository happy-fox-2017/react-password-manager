import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Home = ({ children }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Password Manager</a>
        </Navbar.Brand>
      </Navbar.Header>
      {/*<Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>*/}
    </Navbar>
    <div className="container-fluid">
      {children}
    </div>

  </div>
);

export default Home;
