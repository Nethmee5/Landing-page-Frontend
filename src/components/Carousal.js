import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import CardItems from "./CardItems";
import '../../src/components/carousal.css';
import { CarouselCaption } from "reactstrap";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Carousal = () => {
  return (
    <>
      <h1 style={{ textAlign: "center",fontFamily:'Source Sans Pro',fontSize: 48,
fontStyle: "normal",

/* identical to box height, or 100% */
textAlign: "center",
paddingTop: 100,
letterSpacing: 0.4,

letterSpacing: 0.4,
color: "#08785D",fontWeight: 700, }}>Our Happy Patients</h1>
      <div className="App">
        <hr className="car_hr"/>
        <Carousel breakPoints={breakPoints}>
          <CardItems>
           
            <div className="cust_img">
             <img src={require("../components/images/customer.png")}  class="img_car_img"/>
      
             <div className="txt">
             I feel like I have my life back. No more<br/> pain and recovery was faster than<br/> expected.
             
             <div className="link_tag">
               Aaron Peters
             </div>
             </div>
             </div>
    
            

          </CardItems>


          <CardItems>

          <div className="cust_img">
             <img src={require("../components/images/customer.png")}  class="img_car_img"/>
      
             <div className="txt">
             I have grandsons and they are active. I<br/>
              now can keep up with them without <br/>
              pain.
             
             <div className="link_tag">
               Aaron Peters
             </div>
             </div>
             </div>
    





          </CardItems>
          <CardItems>

          <div className="cust_img">
             <img src={require("../components/images/customer.png")}  class="img_car_img"/>
      
             <div className="txt">
             I feel like I have my life back. No more pain and recovery was faster than expected.
             
             <div className="link_tag">
             Mark Carter
             </div>
             </div>
             </div>
    



          </CardItems>
          <CardItems>


          <div className="cust_img">
             <img src={require("../components/images/customer.png")}  class="img_car_img"/>
      
             <div className="txt">
             My shoulder cause me to not be able to <br/>sleep well. Now I can sleep like a baby.<br/> Thank you.             
             <div className="link_tag">
             Bryan Gonzalez
             </div>
             </div>
             </div>
    



          </CardItems>
          <CardItems>

            
          <div className="cust_img">
             <img src={require("../components/images/customer.png")}  class="img_car_img"/>
      
             <div className="txt">
             I feel like I have my life back. No more pain and recovery was faster than expected.
             
             <div className="link_tag">
               Aaron Peters
             </div>
             </div>
             </div>
    
          </CardItems>
          <CardItems>
            <div className="cust_img">
             <img src={require("../components/images/customer.png")}  class="img_car_img"/>
      
             <div className="txt">
             I feel like I have my life back. No more pain and recovery was faster than expected.
             
             <div className="link_tag">
               Aaron Peters
             </div>
             </div>
             </div>
    </CardItems>
    <CardItems>

            
<div className="cust_img">
   <img src={require("../components/images/customer.png")}  class="img_car_img"/>

   <div className="txt">
   I feel like I have my life back. No more pain and recovery was faster than expected.
   
   <div className="link_tag">
     Aaron Peters
   </div>
   </div>
   </div>

</CardItems>
<CardItems>

            
<div className="cust_img">
   <img src={require("../components/images/customer.png")}  class="img_car_img"/>

   <div className="txt">
   I feel like I have my life back. No more pain and recovery was faster than expected.
   
   <div className="link_tag">
     Aaron Peters
   </div>
   </div>
   </div>

</CardItems>
<CardItems>

            
<div className="cust_img">
   <img src={require("../components/images/customer.png")}  class="img_car_img"/>

   <div className="txt">
   I feel like I have my life back. No more pain and recovery was faster than expected.
   
   <div className="link_tag">
     Aaron Peters
   </div>
   </div>
   </div>

</CardItems>
        
        </Carousel>
      </div>
    </>
  );
}
export default Carousal;

