import React from 'react'
import '..//components/footer.css'
import '../components/images/Vector.png';
const Footer = () => {
  return (
    <div className="Footer">
    <div className="row">
      
        <div className="col">

            <div className="cont1">
                <div className='head1'>VM Forsthill</div>
              <div>
                   <li  id="footer-li">Vivamus efficitur lectus quis justo mollis interdum. Cras id facilisis urna. Nunc malesuada leo erat, ac interdum nisi rhoncus dictum. Proin ultricies dignissim accumsan. In eget volutpat dui</li>
                  
               </div>
            </div>
               
                  
        </div>
            
       

        <div className="col">
            <div className="cont2">
                <div className='head2'>Our Treatments</div>
                <ul>
                <li id="footer-li">Shoulder Treaments</li>
                <li id="footer-li">Knee Treaments</li>
                <li id="footer-li">Ankle Treaments</li>
                <li id="footer-li">Wrist Treaments</li>
           
                
               </ul>
                
            </div>
        </div>

        <div className="col">
            <div className="cont3">
                <div className='head3'>About Us</div>
                <ul>
                <li id="footer-li">Doctors</li>
                <li id="footer-li">Facility</li>
              
          
                </ul>
                
            
               </div>
            </div>
           

     
     
      
            <div className="col">
            <div className="cont4">
                <div className='head4'>Schedule A Consultation </div>
                <ul>
                <li id="footer-li-last">Call - 718-690-3966</li>
            
                     
                </ul>
                
            
               </div>
            </div>

           </div>
         <div className='footer-corner'>© Vital Medical Foresthills | 2021   Terms & Conditions   Privacy Policy</div>

           </div>
                

     
          

  )
}

export default Footer
