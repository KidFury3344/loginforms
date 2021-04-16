import React from 'react';
import "./Signuppage.css";
function Signuppage() {
    return (
        <div className="outer">
            <div className="inner">
                <img className="logo" src="https://www.tpbproxypirate.com/images/pirat.jpg" alt="mainlogo"/>
                <input className="inputs" name="username" placeholder="Username"/>
                <input className="inputs" name="Email" placeholder="Email"/>
                <input className="inputs" name="Password" placeholder="Password" type='password' autoComplete="on" />
                <button className="btn-1" type="submit">Sign Up!</button>
            </div>
        </div>
    )
}

export default Signuppage
