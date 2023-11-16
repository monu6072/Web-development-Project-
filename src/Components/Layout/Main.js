import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navigation from "../Navbar.jsx";
import Footer from "../Footer.jsx";

function Main() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="text-top fixed-top position-relative">
        <Navigation />
      </div>
      <Container fluid className="flex-grow-1 p-0 ">
          <Outlet/>
      </Container>
      <div className="text-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default Main;

