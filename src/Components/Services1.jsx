import React from "react";
import Ser from "./Ser";

function Services1() {
  return (
    <div className="Container-fluid mb-5 mx-auto" id="Service">
    <div className="fw-bold text-center mt-4 p-3">
      <h1 className="display-3 fw-bold b-color mt-5">What we Do</h1>
      <p className="text-warning">Services</p>
    </div>
    <div className="row">
    <div className="col">
    <Ser/>
    </div>
    </div>

    </div>
  );
}

export default Services1;
