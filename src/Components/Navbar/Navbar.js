import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Navbar.css' ;

const reviews = [
  {
    id: 1,
    image: "./images/a2.jpg",
    content: "fake review",
    author: "john doe",
  },
  {
    id: 2,
    image: "./images/a3.jpg",
    content: "fake review",
    author: "jane doe",
  },
  {
    id: 3,
    image: "./images/a4.jpg",
    content: "fake review",
    author: "dane doe",
  },
];

const array = [

  
  {
    id: 1,
    image: "./images/a2.jpg",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 1,
    image: "./images/a2.jpg",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 1,
    image: "./images/a2.jpg",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 1,
    image: "./images/a2.jpg",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
]

let arr2 = 
[
  {
    img:'img1',
    img1:'img2',
    img2:'img3',
    img3:'img4'
  },
  {
    img:'img1',
    img1:'img2',
    img2:'img3',
    img3:'img4'
  },
  {
    img:'img1',
    img1:'img2',
    img2:'img3',
    img3:'img4'
  },
  {
    img:'img1',
    img1:'img2',
    img2:'img3',
    img3:'img4'
  }

]



function CollapsibleExample() {

  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link href="#features" onClick={handleShow}>Features
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
              
              
              
              
              
              
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel Imgaes */}

      <div>
        <Carousel fade>
          {reviews.map((review) => (
            <Carousel.Item key={review.id}>
              <img
                className="d-block w-100"
                src={review.image}
                alt={review.author}
              />
              <Carousel.Caption>
                <h3 style={{ color: "Black" }}>{review.author}</h3>
                <p style={{ color: "Black" }}> {review.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <br />
      
      <Container fluid>
        <p style={{ display: "flex" }}>
          {array.map((value, index) => {
            return (
              <>
              
                <Card style={{ width: "20rem", margin: "5px",height:'auto'}} >
                  
                  <div>
                    <Card.Img variant="top" src={value.image} />
                    
                  
                    <Card.Body >
                    <p className="box">
                      <Card.Title className="box1">Card Title</Card.Title>

                      <Card.Text className="box1">{value.content}</Card.Text>
                  

                      <Button variant="primary" className="btn box1">Go somewhere</Button>
                      
                      </p></Card.Body>
                  
                  </div>
                </Card>
              </>
            );
          })}
          <br/>
        </p>
      </Container>

          <Container fluid>

          <div style={{display:'flex'}}>
            {arr2.map((value)=>{
              return(<>
              
             
              <Card style={{ width: "20rem",height:'300px',margin:'5px'}}>
                  <Card.Title>Title</Card.Title>

                  <div style={{display:'flex',margin:'5px'}}>
                    <div style={{margin:'5px'}}>
                    <img src='./images/a4.jpg' width='100%'/>{value.img}
                    </div>

                    <div style={{margin:'5px'}}>
                    <img src='./images/a2.jpg' width='100%'/>{value.img1}
                    </div>
                  </div><br/>

                  <div style={{display:'flex'}}>
                    <div style={{margin:'5px'}}>
                    <img src='./images/a3.jpg' width='100%'/>{value.img2}
                    </div>

                    <div style={{margin:'5px'}} >
                    <img src='./images/a5.jpg' width='100%'/>{value.img3}
                    </div>
                  </div>

                   
               
                  


              </Card>

              </>)
            })}

</div>

          </Container>



    </>
  );
}

export default CollapsibleExample;
