import React from "react";
import Tab from "../GetContact/Tab"

function Getme() {
  return (
    <div className="ms-auto mx-auto ">
      <div>
        <img
          src="breadcrumb-1.jpg"
          className=" img-fluid img-thumbnail"
          style={{ width: "120em", height: "16em", filter: "brightness(30%)" }}
          alt=""
        />
        <Tab/>
      </div>
      <div class="card-group p-5  ">
        <div class="card m-5 img-thumbnail">
          <div class="card-body">
            <h5 className="card-title b-color">Phone Number</h5>
            <p class="card-text b-color">011 – 44711473 , +91-74174 17024</p>
          </div>
        </div>
        <div class="card m-5 img-thumbnail">
          <div class="card-body">
            <h5 class="card-title">Office Address</h5>
            <p class="card-text">
              IFISYS SOFTWARE AND SERVICES PRIVATE LIMITED Pearls Omaxe Tower,
              402 Tower 1, Netaji Subhash Place, Pitam Pura, Delhi, 110034
            </p>
          </div>
        </div>
        <div class="card m-5 img-thumbnail">
          <div class="card-body">
            <h5 class="card-title">Email Address</h5>
            <p class="card-text">contact@ifisys.com</p>
          </div>
        </div>
      </div>

      <div className="row mx-auto container ">
        <div className="col-6">
          <form >
          <p className="text-start fw-bold" style={{color:"#fe6d4e"}}>Get Pure Estimate</p>
          <h1 className="b-color fw-bold text-start">Get In Touch With Us</h1>
            <div class="row g-2 ">
              <div class="col-md-6 border-0">
                <input
                  type="text"
                  class="form-control rounded shadow border-0 m-3 p-4"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div class="col-md-6 ">
                <input
                  type="text"
                  class="form-control rounded shadow border-0 m-3 p-4"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
              <div class="col">
                <input
                  type="Email"
                  class="form-control rounded shadow border-0 m-3 p-4"
                  placeholder="Enter Email Address"
                  aria-label="Enter Email Address"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control rounded shadow border-0 m-3 p-4"
                  placeholder="Select Subject"
                  aria-label="Select Subject"
                />
              </div>
              <div class="form-floating mb-1 col-12">
                <label for="floatingTextarea2" className="text-center"></label>
                <textarea
                  class="form-control rounded shadow border-0 m-3 p-4"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
              <div class="col-12 mb-1">
                <button class="btn rounded-5 " style={{backgroundColor:"#fe6d4e"}} type="submit">
                  Get A Quote
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img
            src="	https://ifisys.co/wp-content/uploads/2021/07/image-17.jpg"
            className="img-fluid img-thumbnail rounded mx-auto d-block "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Getme;
