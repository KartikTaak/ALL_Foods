import React from 'react'
import "./Signform.css";
const Signform = () => {
  return (
    <div className="login">

    <h1 className="text-center">Login!</h1>
    
    <form className="needs-validation">
        <div className="form-group was-validated">
            <label className="form-label" for="email">Email address</label>
            <input className="form-control" type="email" id="email" required></input>
            <div className="invalid-feedback">
                Please enter your email address
            </div>
        </div>
        <div className="form-group was-validated">
            <label className="form-label" for="password">Password</label>
            <input className="form-control" type="password" id="password" required></input>
            <div className="invalid-feedback">
                Please enter your password
            </div>
        </div>
        <div className="form-group form-check">
            <input className="form-check-input" type="checkbox" id="check"></input>
            <label className="form-check-label" for="check">Remember me</label>
        </div>
        <input style={{color:"white"}} className="btn  w-100" type="submit" value="SIGN IN"></input>
    </form>

</div>
  )
}

export default Signform