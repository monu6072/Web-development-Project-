import React, { useState } from 'react';
import './Ser.css'; // Import your CSS file for styling

function Box(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`col ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={`card h-100 number-container mx-auto ${isHovered ? 'hovered-card' : ''}`}>
        <h1
          className="card-img-top fw-bolder text-center my-4 "
          style={{ fontSize: "130px" }}
        >
          {props.number}
        </h1>
        <div className="card-body">
          <h5 href="" className={`card-title text-center ${isHovered ? 'title-hover' : ''}`}>
            <p className="b-color fw-bold text-start">
              {props.title}
            </p>
          </h5>
          <p className={`card-text fs-5 text-start text-muted `}>
            {props.description}
          </p>
        </div>
        <div className={`card-footer border-0  d-flex ${isHovered ? 'footer-hover' : ''}`}>
          <img src={props.icon} className="w-25 text-start mr-3" alt="" />
          <button type='button' className={`btn text-muted col-8 text-end fw-bold ${isHovered ? 'btn-hover' : ''}`}>
            Read more {"->"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Ser() {
  return (
    <div className="row row-cols-1 my-5 mx-5 row-cols-md-4 g-1">
      {/* Render four boxes */}
      <Box
        number="01"
        title="Digital Marketing Services"
        description="Digital Marketing is the best way to increase your business online visibility. and also helps to increase website traffic"
        icon="house.png"
      />
      <Box
        number="02"
        title="Web development Services"
        description="Services for developing websites have played a major contribution to the development and growth of an organization."
        icon="house.png"
      />
            <Box
        number="03"
        title="Mobile App development Services"
        description="Services for developing websites have played a major contribution to the development and growth of an organization."
        icon="house.png"
      />
            <Box
        number="04"
        title="graphic Design Services"
        description="Services for developing websites have played a major contribution to the development and growth of an organization."
        icon="house.png"
      />
    </div>
    
  );
}

export default Ser;
