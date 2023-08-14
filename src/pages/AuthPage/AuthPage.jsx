import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <h1>Anime loot Store</h1>
      <Card.Img
        variant="top"
        className="icon"
        src="https://i.etsystatic.com/41024413/r/il/c23787/5049500361/il_794xN.5049500361_9r4v.jpg"
      />
      <h3>
        This is your one stop shop for anime-lootsnacks-around the world. Wanna try snacks around the world from the
        comfort of your home with a guaranteed anime shirt of a random style with anime snacks?
      </h3>

      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}

      {/* Modal */}
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Show Modal
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Anime Loot Store Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* Add content here */}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
