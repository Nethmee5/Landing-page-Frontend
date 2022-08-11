import React from "react";
import Contentcard from "../Contentcard";
import "../header/header.css";
import Footer from "../Footer";


import Form from "../Form/Form";
import Carousal from "../Carousal";

const Header = () => {
  return (
    <div className="home">
      <div className="header">

        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              VM Foresthills
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Treatments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Testimonials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Doctors & Clinic
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Treatment process
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Call-678-876-547
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <p className="para1">WORLD CLASSOTHOPEDIC SURGERY TO </p>
        <p className="para2">
          LIVE PAIN FREE AND HELP YOU GET BACK TO YOUR HAPPY LIFE
        </p>
        <button type="button" id="btn_1"class="btn btn-primary btn-lg" style={{}}>
          Book appointment
        </button>
        <button type="button" id="btn_2"class="btn btn-primary btn-lg" style={{}}>
        <img src={require("../images/Vector.png") }class="vector_phone" />Call - 718-690-3966
        </button>
       
      </div>
      <div className="Carousal">
        <Carousal />
      </div>

      <div class="card">
        <div class="card-body">
          <img src={require("../images/doctor.png")} class="doc-img" />
          <div class="content">
            <p class="heading">DR. PETER A. TOMASELLO JR.</p>
            <hr class="hr" />
            <p>
              Peter A. Tomasello, Jr. D.O. is a Board Certified orthopedic
              surgeon specializing in the operative and non-operative treatment
              of acute orthopedic injuries and conditions including: fractures,
              sprains, strains, soft tissue injuries, and infections. Dr.
              Tomasello evaluates and treats a wide variety of sports and
              activity related problems as well as general orthopedic
              conditions.{" "}
            </p>
            <p>
              Dr. Tomasello obtained his undergraduate degree from the
              University of South Florida in Tampa. He received his doctorate in
              Osteopathic Medicine from Nova Southern University of Health
              Sciences.
            </p>
          </div>
        </div>
      </div>
      <div className="fform">
        <Form />
      </div>
   
        <div className="title-cards">Treatments We Provide</div>
        <hr className="hr_treat"/>
        <div className="content-cards">
        <Contentcard
          title="Relieve Shoulder Pain"
          paragraph="We deal with various conditions ranging from rotator cuff injuries, labral injuries, bursitis, tendinitis, and impingement syndrome. 
         Patients may be experiencing a variety of symptoms such as shoulder pain, weakness, tenderness, decreased range of motion, pain with overhead activities, and nocturnal symptoms. 
        Different treatment options would consist of physical therapy, anti-inflammatory medications, shoulder injections, or surgery such as shoulder arthroscopy."
        image={require("../images/Image.jpg")} />
        <Contentcard
          title="Relieve Wrist Pain"
          paragraph="We focus on tendon and ligament tears in the wrist such as a tear of the triangular fibrocartilage complex. 
           Symptoms can vary from wrist pain, weakness, tenderness, decreased range of motion, and pain with lifting and movements. 
          Different treatment options would consist of physical therapy, anti-inflammatory medications, braces, or surgery such as wrist arthroscopy. "
         image={require("../images/Image6.png")}/>

        <Contentcard title="Relieve Knee Pain"  paragraph="We deal with several different knee conditions such as meniscal injuries, ligament injuries, bursitis, tendinitis, and joint effusions 
       Patients may be experiencing a variety of symptoms such as knee pain, tenderness, decreased range of motion, and pain with weight-bearing activities. 
        Different treatment options would consist of physical therapy, anti-inflammatory medications, knee steroid injection, or surgery such as knee arthroscopy."   image={require("../images/Image 3.png")}/>
        <Contentcard title="Relieve Ankle Pain" paragraph="We focus on tendon and ligament tears in the ankle such as a tear of the anterior talofibular ligament or deltoid ligament. 
       Symptoms can vary from ankle pain, weakness, tenderness, decreased range of motion, and pain with weight-bearing activities. 
      Different treatment options would consist of physical therapy, anti-inflammatory medications, braces, or surgery such as ankle arthroscopy."   image={require("../images/Image 4.png")} />
        <Contentcard title="Pain Management"  paragraph="We treat various conditions involving the neck and back such as disc disease, herniated disc, bulging disc, cervical disc hernia, and nerve/spinal cord compression. Patients may experience different symptoms such as neck pain, back pain, muscle tension, or other spinal conditions.
      Different treatment options include cervical epidurals, lumbar epidurals, lumbar discectomy, cervical discectomy, trigger point injections, and medial branch injections."   image={require("../images/Image 5.png")}/>
      </div>
      <div className="map-section">
        <div className="image-map">
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt=""
          className="map-image"
          width="300px"
          height="300px"
        ></img>
</div>
<div className="form-sectiona">
<form class="row g-3" id="map-section-content">
  <div class="col-md-6">
   
    <input type="name" class="form-control" id="inputEmail4"placeholder="First Name*"/>
  </div>
  <div class="col-md-6">
   
   <input type="name" class="form-control" id="inputEmail4"placeholder="Last Name*"/>
 </div>
 <div class="col-md-6">
   
   <input type="email" class="form-control" id="inputEmail4"placeholder="Email"/>
 </div>
 <div class="col-md-6">
   
   <input type="number" class="form-control" id="inputEmail4"placeholder="Mobile Number"/>
 </div>

  <div class="col-12">

    <input type="text" class="form-control" id="inputAddress" placeholder="Subject"/>
  </div>
  <div class="col-12">

<textarea class="form-control" id="inputAddress" placeholder="Message"/>
</div>
<button className="btn_book">Book Appointment</button>
  </form>
  </div>
      </div>
      <Footer />
    </div>
  );
};

export default Header;
