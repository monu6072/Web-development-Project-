import React from "react";
import { Badge } from "rsuite";

function About() {
  return (
    <div className="row mx-auto mt-5 container ">
      <div className="col-5">
        <img src="https://gaviaspreview.com/wp/qempo/wp-content/uploads/2021/06/image-2.jpg" alt="" className="mt-5 img-fluid zoom-img" />
      </div>
      <div className="col-7 text-start fw-bold ">
        <p className="text-warning">About Out Company</p>
        <h1 className="b-color display-3 fw-bold ">
          We are the Best Digital Marketing Agency in India
        </h1>
        <p className="text-muted fs-5 lh-1 my-5 ">
          Our team consists of highly motivated entrepreneurs who have a lot of
          experience in digital marketing campaigns. Our success is measured by
          the success of clients. It is not hard work that pays off, but smart
          work that makes the difference. We encourage our clients to be proud
          of what they do best and to let us handle the digital marketing.
        </p>
        <p className="d-flex">
          <Badge pill>
            <img src="image-4.jpg" className="rounded-5 w-75" alt="" />
          </Badge>
          <span>
            <h3>Our Vision</h3>
            <small className="container-fluid ">
              At IFISYS, our vision is to become the leading provider of digital
              marketing and website development services in Delhi. We strive to
              provide innovative solutions to help businesses reach their online
              goals.
            </small>
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
