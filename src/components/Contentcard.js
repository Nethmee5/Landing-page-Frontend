import React from "react";
import "../components/contentcard.css";
const Contentcard = (props) => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div className="content-body">
            <div className="title">Relieve Shoulder Pain</div>
            <hr className="hrtag" />
            <p>
              We deal with various conditions ranging from rotator cuff
              injuries, labral injuries, bursitis, tendinitis, and impingement
              syndrome. Patients may be experiencing a variety of symptoms such
              as shoulder pain, weakness, tenderness, decreased range of motion,
              pain with overhead activities, and nocturnal symptoms. Different
              treatment options would consist of physical therapy,
              anti-inflammatory medications, shoulder injections, or surgery
              such as shoulder arthroscopy.
            </p>
          </div>
          <img src={require("./images/Image.jpg")} />
        </div>
      </div>
    </div>
  );
};

export default Contentcard;
