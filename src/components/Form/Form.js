import React from "react";
import "../Form/form.css";

function Form() {
  return (
    <div className="form-content">
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="firstname"
            aria-describedby="emailHelp"
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="lastname"
            placeholder="Email"
            style={{
              width: 285,
              height: 50,

              background: "rgba(112, 228, 192, 0.2)",
              borderRadius: 5,
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: 590,
            height: 50,

            backgroundColor: "#08785D",
            borderRadius: 5,
          }}
        >
          Send Me - 5 Thinngs You Need To Know Before Surgery
        </button>
      </form>
    </div>
  );
}

export default Form;
