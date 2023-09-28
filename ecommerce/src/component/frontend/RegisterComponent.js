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
      .post("http://localhost:5000/users/register", data)
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
    </>
  );
}

export default RegisterComponent;
