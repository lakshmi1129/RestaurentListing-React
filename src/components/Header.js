import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    // html code
    <Navbar  variant="dark">
        <Container >
          <Navbar.Brand href="/">
            <img
              alt="no image"
              src="https://i.pinimg.com/originals/69/e2/61/69e261419d7def685b1aa4204707a5bf.gif"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '} &nbsp;
            Grill Lab
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header