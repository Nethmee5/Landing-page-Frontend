import React from "react";
import "../Form/form.css";

function Form() {
  return (
    <>
    <div class="row">
    <div class="col">
      <input type="text" class="form-control" id="form_1"placeholder="First Name*" aria-label="First name"/>
    </div>
    <div class="col">
      <input type="email" class="form-control " id="form_2"placeholder="Email*" aria-label="Last name"/>
    </div>
    
    
</div>
<div class="row">
<button type="submit" className="btn_sbt">Send Me - 5 Things You Need To Know Before Surgery</button>

</div>

</>


    
  );
}

export default Form;
