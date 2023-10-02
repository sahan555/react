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

        // setTimeout(()=>{
        //  window.location.href="/login";
        // },1000);
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
          <div className="row">
            <div className="col-md-6">
              <h1>
                Connecting Hearts, One Click at a Time: Your Social Journey
                Begins Here!
              </h1>
              <div className="video-wrapper">
              <video src="/assets/videos/video.mp4" muted autoplay loop></video>

              </div>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  {/* <p>{email}</p> */}
                  <input
                    type="email"
                    id="inputEmail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default RegisterComponent;
