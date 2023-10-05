import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile/get")
      .then((response) => {
        console.log(response);
        // console.log(response.data);
        // console.log(response.data.products);
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

console.log(profile)



  const handleSubmit = (e) => {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/login", data)
      .then((response) => {
        console.log(response.data);

        alert(`success: ${response.data.msg}`);
        setTimeout(() => {
          // Store the token in the localstorage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userData", JSON.stringify(response.data)); // Store the user data localstorage

          // Redirect to login after 1 seconds
          console.log(response.data.token);
          

          {!profile? (
            window.location.href = "/profile"
          ) : (
            window.location.href="/"
          )}

            
        }, 1000);
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // Extract the error message from the response data
          const errorMessage = err.response.data.msg;
          alert(`Error: ${errorMessage}`);
        } else {
          // Error occurred before the request was made or no response was received
          alert("Sorry, something went wrong");
          console.log(err);
        }
      });
  };
  return (
    <>
      <section className="login-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="position-relative">
                <h1>
                  Connecting Hearts, One Click at a Time:
                  <b>Your Social Journey Begins Here!</b>
                </h1>
                <div className="background-wrapper">
                  <img src="/assets/images/premium.avif" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <form>
                <div className="bg-white p-4 h-100 login-form">
                  <div className="p-3 d-flex justify-content-center flex-column align-items-center">
                    <span className="main-heading">Signin To Talkie</span>
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
                      <label htmlFor="inputEmail">email</label>
                      <input
                        type="email"
                        className="form-control w-100"
                        id="inputEmail"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-data">
                      <label htmlFor="inputPassword">Password</label>
                      <input
                        type="password"
                        className="form-control w-100"
                        id="inputPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-between w-100 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me
                        </label>
                      </div>
                      <a className="text-decoration-none forgot-text" href="#">
                        Forgot password?
                      </a>
                    </div>
                    <div className="signin-btn w-100 mt-2">
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                        onClick={handleSubmit}
                      >
                        Signin
                      </button>
                    </div>
                  </div>
                  <div className="register-link text-center">
                <p>Don't have account? <Link to="/register">Click here</Link></p>
              </div>
                </div>
                
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default LoginComponent;
