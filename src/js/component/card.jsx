import React from "react";

const Card = (props) => {
  return (
    <div className="container d-flex justify-content-evenly pt-4 col col-sm-6 col-lg-3 mb-5">
    <div className="ard" style={{width: "18rem"}}>
    <img className="card-img-top" src="http://via.placeholder.com/500x325/" alt="Card image cap" /> 
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
  /*
    <div className="container d-flex justify-content-evenly pt-4 col col-sm-6 col-lg-3 mb-3">
      <div className="card " style={{ width: "16rem" }}>
        <img
          src="http://via.placeholder.com/500x325/"
          className="card-img-top"
          alt="placeholder"
        />
        <div className="card-body justify-content-center">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="row justify-content-center">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
          </div> 
        </div>
      </div>
    </div>
  );
};*/
  )}
export default Card;
