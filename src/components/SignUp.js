import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../signup.css";
import Passwordtoggle from "./misc/Passwordtoggle";
import { useToaster, Message, Modal, Button, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const SignUp = () => {
  const [signin, setSignin] = useState(true);

  const aa = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const signup = (e) => {
    e.preventDefault();
    alert("signup");
  }

  return (
    <>
      <div className="bodybill d-flex justify-content-center align-items-center">
        <div className="mx-auto col-md-4 col-10 p-4 bg-light rounded-4 shadow border border-1 border-primary bg-opacity-50">
          <div className="text-center fs-1 text-primary mb-4">
            <div className="btn btn-outline-primary d-flex justify-content-center align-items-center" onClick={()=>setSignin(()=>true)}>
              <input type="radio" className="pt-5" checked={signin} />
              <div className="fs-2">SIGNIN</div>
            </div>
            SIGNUP
          </div>
          <form onSubmit={signup} className="row justify-content-center align-items-center" >
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-fill"></i></span>
              <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon2"><i class="bi bi-person-lines-fill"></i></span>
              <input type="number" className="form-control" id="floatingInput" placeholder="Roll Number" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon3"><i class="bi bi-envelope-at-fill"></i></span>
              <input type="email" className="form-control" id="floatingInput" placeholder="Email Address" aria-describedby="basic-addon3" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon4"><i class="bi bi-telephone-fill"></i></span>
              <input type="tel" className="form-control" id="floatingInput" placeholder="Phone Number" aria-describedby="basic-addon4" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon5"><i class="bi bi-people-fill"></i></span>
              <input type="text" className="form-control" id="floatingInput" placeholder="Organization Name" aria-describedby="basic-addon5" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon6"><i class="bi bi-journals"></i></span>
              <input type="text" className="form-control" id="floatingInput" placeholder="Course & Branch" aria-describedby="basic-addon6" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon7"><i class="bi bi-journal"></i></span>
              <input type="text" className="form-control" id="floatingInput" placeholder="Semester" aria-describedby="basic-addon7" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon8"><i class="bi bi-lock-fill"></i></span>
              <input type="password" className="form-control" id="floatingInput" placeholder="Password" aria-describedby="basic-addon8" />
            </div>
            <div className="input-group mb-3 col-10">
              <span class="input-group-text" id="basic-addon9"><i class="bi bi-lock-fill"></i></span>
              <input type="text" className="form-control" id="floatingInput" placeholder="Confirm Password" aria-describedby="basic-addon9" />
            </div>
            <button onClick={signup} className="btn btn-primary">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;