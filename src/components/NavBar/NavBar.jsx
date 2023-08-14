import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as userService from '../../utilities/users-service';

function NavBar({ user, setUser }) {
  const [cartItems, setCartItems] = useState([]);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function addToCart(item) {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  }

  return (
    <>
      <div className="border-top bg-dark text-white p-2" style={{ marginTop: '-19px' }}>
        <div className="container">
          Welcome to the Anime Loot Snack Store!
        </div>
      </div>
      <Navbar expand='sm' className="bg-transparent">
        <Container fluid>
          <Navbar.Brand className="navbar-brand">
            <Link to="/">anime-lootsnack-store</Link>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="https://joseph-rihan-portfolio.netlify.app/"
                target="_blank" rel="noopener noreferrer">My Profile</Nav.Link>
              <Nav.Link as={Link} to="/entries">
                <i className="fas fa-shopping-cart"></i> {/* Shopping cart icon */}
                Your Shopping Cart
              </Nav.Link>

              &nbsp;&nbsp;
              <Nav.Link as={Link} to="/entries/new">Add Additional Loot</Nav.Link>
              &nbsp;&nbsp;
              <Navbar.Text><span>Welcome, {user.name}</span></Navbar.Text>
              &nbsp;&nbsp;
              <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
