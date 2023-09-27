import React, { useState } from "react";

function RegisterComponent() {
    const {email,setEmail} = useState('');
    const {password,setPassword} = useState('');
    return (
    <>
      <form>
        <div className="form-group">
            <label>Email</label>
            <input type="email" id="inputEmail" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" id="inputPassword" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
}

export default RegisterComponent;
