import React, { useState } from "react";
import axios from "axios";

function ProfileComponenet() {
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("fullname", fullname);
    formData.append("bio", bio);
    formData.append("dob", dob);
    formData.append("image", image);

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post("http://localhost:5000/user/profile/create", formData, config)
      .then((response) => {
        console.log(response);
        alert(`success:${response.data.msg}`);
        setTimeout(() => {
          window.location.href = "/home";
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
              <h1 className="main-heading">Profile Details</h1>
              <div className="form-data">
                <label htmlFor="inputUserName">Username</label>
                <input
                  className="form-control w-100"
                  type="text"
                  id="inputUserName"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="inputFullName">Fullname</label>
                <input
                  className="form-control w-100"
                  type="text"
                  id="inputFullName"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="inputDob">Date of Birth</label>
                <input
                  className="form-control w-100"
                  type="date"
                  id="inputDob"
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="inputBio">Bio</label>
                <input
                  className="form-control w-100"
                  type="text"
                  id="inputBio"
                  onChange={(e) => setBio(e.target.value)}
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="image">Upload your image</label>
                <input
                  type="file"
                  id="image"
                  className="form-control"
                  name="filename"
                  onChange={(e) => setImage(e.target.files[0])}
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
export default ProfileComponenet;
