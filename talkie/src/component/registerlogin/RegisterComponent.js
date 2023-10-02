import React, { useState } from "react";
import axios from "axios";

function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/register", data)
      .then((response) => {
        console.log(response);
        alert(`success:${response.data.msg}`);

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        // alert(`error:${err.response.data.msg}`);
        console.log(err.response.data.msg);
      });
  };
  return (
    <>
      <section className="register-page">
        <div className="container">
          <div className="bg-white p-4 h-100 login-form ">
            <div className="p-3 d-flex justify-content-center flex-column align-items-center">
              <span className="main-heading">Join with us Talkie</span>
              <ul className="social-list mt-3">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
              </ul>
              <div className="form-data">
                <label>Email</label>
                <input
                  className="form-control w-100"
                  type="email"
                  id="inputEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-data">
                <label>Password</label>
                <input
                  className="form-control w-100"
                  type="password"
                  id="inputPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="signin-btn w-100 mt-2">
                <button
                  className="btn btn-danger btn-block"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
       
        </div>
      </section>
    </>
  );
}
export default RegisterComponent;
