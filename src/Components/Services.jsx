import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <div className="Container-fluid mb-5 mx-auto " id="Service">
      <div className="fw-bold text-center mt-5">
        <h1 className="display-3 fw-bold b-color">What we Do</h1>
        <p className="orange">Services</p>
      </div>
      <div className="row row-cols-1 my-5 mx-5 row-cols-md-4 g-1 ">
        <div className="col">
          <div className="card h-100 number-container">
            <h1 className="card-img-top fw-bolder text-center" style={{fontSize:"130px"}}>01</h1>
            <div className="card-body">
              <h5 href="" className="card-title  text-center">
              <p className=""> Digital Marketing <br/> Services</p>
              </h5>
              <p className="card-text p-5  text-start b-color">
                Digital Marketing is the best way to increase your business
                online visibility. and also helps to increase website traffic
              </p>
            </div>
            <div className="card-footer border-0 bg-white d-flex">
              <img src="house.png" className="w-25 text-start" alt="" />
              <a className="btn text-muted col-8 text-end fw-bold " href="#/">Read more {"->"}</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 number-container">
            <h1 className="card-img-top fw-bolder text-center" style={{fontSize:"130px"}}>02</h1>
            <div className="card-body">
              <h5 href="" className="card-title  text-center">
              <p className=""> Digital Marketing <br/> Services</p>
              </h5>
              <p className="card-text p-5  text-start b-color">
                Digital Marketing is the best way to increase your business
                online visibility. and also helps to increase website traffic
              </p>
            </div>
            <div className="card-footer border-0 bg-white d-flex">
              <img src="house.png" className="w-25 text-start" alt="" />
              <a className="btn text-muted col-8 text-end fw-bold " href="#/">Read more {"->"}</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 number-container">
            <h1 className="card-img-top fw-bolder text-center" style={{fontSize:"130px"}}>03</h1>
            <div className="card-body">
              <h5 href="" className="card-title  text-center">
              <p className=""> Digital Marketing <br/> Services</p>
              </h5>
              <p className="card-text p-5  text-start b-color">
                Digital Marketing is the best way to increase your business
                online visibility. and also helps to increase website traffic
              </p>
            </div>
            <div className="card-footer border-0 bg-white d-flex">
              <img src="house.png" className="w-25 text-start" alt="" />
              <a className="btn text-muted col-8 text-end fw-bold " href="#/">Read more {"->"}</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 number-container">
            <h1 className="card-img-top fw-bolder text-center" style={{fontSize:"130px"}}>04</h1>
            <div className="card-body">
              <h5 href="" className="card-title  text-center">
              <p className=""> Digital Marketing <br/> Services</p>
              </h5>
              <p className="card-text p-5 b-color  text-start">
                Digital Marketing is the best way to increase your business
                online visibility. and also helps to increase website traffic
              </p>
            </div>
            <div className="card-footer border-0 bg-white d-flex">
              <img src="house.png" className="w-25 text-start" alt="" />
              <a className="btn text-muted col-8 text-end fw-bold " href="#/">Read more {"->"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
