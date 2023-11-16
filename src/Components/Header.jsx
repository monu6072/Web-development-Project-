import React from "react";
import { FaComments } from "react-icons/fa";
import "./Header.css"

function Header() {
  return (
    <header className="container-fluid bg-light header-expand-lg head ">
      <div className="row mx-3 heads ">
        <div className="col-7 col-md-7 p-4  mt-5 text-start text-sm-start">
          <h5 className="text-muted">
            Get Your Website Ready With Our Technology
          </h5>
          <div class="animation-container">
            <h1 class="animation-text">
              <span class="animated-letter">B</span>
              <span class="animated-letter">e</span>
              <span class="animated-letter">s</span>
              <span class="animated-letter">t</span>
              <span class="animated-letter">&nbsp;</span>
              <span class="animated-letter">W</span>
              <span class="animated-letter">e</span>
              <span class="animated-letter">b</span>
              <span class="animated-letter">s</span>
              <span class="animated-letter">i</span>
              <span class="animated-letter">t</span>
              <span class="animated-letter">e</span>
            </h1>
            <h1 class="animation-text">
              <span class="animated-letter">D</span>
              <span class="animated-letter">e</span>
              <span class="animated-letter">v</span>
              <span class="animated-letter">e</span>
              <span class="animated-letter">l</span>
              <span class="animated-letter">o</span>
              <span class="animated-letter">p</span>
              <span class="animated-letter">m</span>
              <span class="animated-letter">e</span>
              <span class="animated-letter">n</span>
              <span class="animated-letter">t</span>
            </h1>
            <h1 class="animation-text">
              <span class="animated-letter">C</span>
              <span class="animated-letter">o</span>
              <span class="animated-letter">m</span>
              <span class="animated-letter">p</span>
              <span class="animated-letter">a</span>
              <span class="animated-letter">n</span>
              <span class="animated-letter">y</span>
            </h1>
            <div className="d-flex flex-column">
              <span className="col-1 comment-icon">
                <FaComments/>
              </span>
              <div className="mb-3">
                <span ><a href="/Getme">Get Support</a></span>
                <h4>contact@hifisys.com</h4>
              </div>
            </div>
            <div className="mb-3">
            <button className="btn btn-warning rounded-5 fw-bold text-light p-2 ">
            <span className="p-3"><a href="/Getme" className="text-dark">Get Started Now</a></span>
          </button>
          <button className="mx-5 btn btn-light border-dark  rounded-5 fw-bold text-primary p-2 ">
            Learn More
          </button>
            </div>
            
          </div>

        </div>
        <div className=" col-5 col-md-5 p-4 text-center position-relative img-fluid">
          <img src="img2.png" alt="" className="spiner1 mb-3 p-3" />
          <img src="img3.png" alt="" className="spiner2 mb-3 p-3" />
          <img src="img1.png" alt="" className="headimg p-3" />
        </div>
      </div>
    </header>
  );
}

export default Header;
