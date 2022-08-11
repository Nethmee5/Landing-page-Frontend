import React from "react";
import "../components/contentcard.css";
const Contentcard = (props) => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div className="content-body">
            <div className="title">{props?.title}</div>
            <hr className="hrtag" />
            <p>
            {props?.paragraph}
            </p>
          </div>
          <img src={props?.image}/>
        </div>
      </div>
    </div>
  );
};

export default Contentcard;
