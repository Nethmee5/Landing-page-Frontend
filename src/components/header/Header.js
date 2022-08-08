import React from "react";
import Contentcard from "../Contentcard";
import "../header/header.css";
import Footer from "../Footer";

import Form from "../Form/Form";
const Header = () => {
  return (
    <div className="home">
      <div className="header">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              VM Foresthills
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
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
        <button type="button" className="btn">
          Book appointment
        </button>
        <br />
        <button type="button" className="btn1">
          Call 987-987-789
        </button>
      </div>

      <div class="container my-5">
        <hr class="my-5" />

        <div
          id="multi-item-example"
          class="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          <div class="controls-top">
            <a
              class="btn-floating"
              href="#multi-item-example"
              data-slide="prev"
            >
              <i class="fa fa-chevron-left"></i>
            </a>
            <a
              class="btn-floating"
              href="#multi-item-example"
              data-slide="next"
            >
              <i class="fa fa-chevron-right"></i>
            </a>
          </div>

          <ol class="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <div className="content-cards">
        <Contentcard />
        <Contentcard />

        <Contentcard />
        <Contentcard />
        <Contentcard />
      </div>
      <div className="map-section">
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt=""
          className="map-image"
          width="300px"
          heught="300px"
        ></img>

        <form className="map-section-content">
          <table>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name*"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Email*"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Mobile Number"
                />
              </td>
            </tr>
            <br />
            <tr colspan="2">
              {" "}
              <input
                type="text"
                class="form-control"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="Subject"
              />
            </tr>
            <br />
            <tr>
              {" "}
              <input
                type="text"
                class="form-control"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="message"
              />
            </tr>
            <tr>
              <button
                type="submit"
                style={{
                  width: 590,
                  height: 50,

                  backgroundColor: "#08785D",
                  borderRadius: 5,
                }}
              >
                Book Appointment
              </button>
            </tr>
          </table>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Header;
