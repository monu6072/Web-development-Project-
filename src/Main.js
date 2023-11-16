import React from "react";
import { Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";


function Main() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="text-top">
        <Navbar/>
      </div>
      <Container fluid className="flex-grow-1">
        <Outlet />
      </Container>
      <div className="text-bottom">
      </div>
    </div>
  );
}

export default Main;
