import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'; // Importing Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Navbar, Nav, Carousel } from 'react-bootstrap'; // Importing Navbar and Carousel from react-bootstrap

export default function AuthPage({ cart, setCart }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/entries';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      id: cart.length + 1,
      name: "Anime Loot Snack & Merc Random prize giveaway",
      price: 30,
    };
    setCart(prevCart => [...prevCart, newItem]);
  };

  return (
    <main className="container">
      <Navbar bg="">
      {/* <Navbar bg="light" expand="lg"> */}
        {/* <Navbar.Brand href="#home">Anime Loot Store</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link> */}
            {/* Add more links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h1>anime-loot-item-page</h1>
      {/* <div className="border-top"></div> */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2u50oE4PzMtq_EzMzgB0IUrGir8-c0eg1A&usqp=CAU"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/xHBnizIUo0w/maxresdefault.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70"
            src="https://media.istockphoto.com/id/1286891645/vector/banner-for-2021-insta-new-year.jpg?s=612x612&w=0&k=20&c=R2NUvcu1pjSk5lHx1SABJEc77CEzu-Jz21EEg8V4Pk0="
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.gameinformer.com/sites/default/files/styles/full/public/2023/07/20/bcc1a68f/marvels_spider-man_ps5.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        {/* Add more carousel items as needed */}
      </Carousel>

      <div className="boxes-container">
        <div className="image-box">
          <Card className="image-card">
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/909/655/png-transparent-one-piece-logo-monkey-d-luffy-one-piece-usopp-logo-pirate-hat-manga-jolly-roger-smiley-thumbnail.png" />
            <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button> {/* Using Bootstrap Button component */}
          </Card>
        </div>

        <div className="top-box">
          <h2>Welcome to the Anime Loot Store!</h2>
          <p>Explore our wide range of anime-inspired products.</p>
        </div>

        <div
          className="bottom-box"
          style={{
            backgroundImage: 'url("https://example.com/path-to-your-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'red',
          }}
        >
          <h2>Check Out Our Latest Arrivals</h2>
          <p>Discover the newest anime merchandise in our store.</p>
        </div>
      </div>

      <h3>This is your one stop shop for anime-lootsnacks-around the world. 
        Wanna try snacks around the world from the comfort of your home 
        and with a guaranteed anime shirt of a random style with anime snacks?</h3>

      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="item-box">
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
            {data.map(item => (
              <li key={item._id}>
                {item.details.animeloot} - ${item.details.entry}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-top d-flex justify-content-between align-items-center p-2">
          <div className="col text-center">
            <div className="icon-box">
              <img src="https://lootcrate.com/cdn/shop/files/LA-Evergreen-ProductPageGalleryUpdates-pastitems2-3000x1690-copy_1400x1400.jpg?v=1690516870" className="img-fluid border-icon" alt="Icon 1" /> {/* Using Bootstrap's img-fluid class */}
            </div>
          </div>
          <div className="col text-center">
            <div className="icon-box">
              <img src="https://blog.hollywoodbranded.com/hubfs/Copy%20of%20Copy%20of%20Best%20of_%20COVID-19%20and%20entertainment%20%281%29.png" className="img-fluid border-icon" alt="Icon 2" /> {/* Using Bootstrap's img-fluid class */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
