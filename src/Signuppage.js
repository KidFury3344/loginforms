import React from 'react';
import "./Signuppage.css";
import { useForm } from 'react-hook-form'
function Signuppage() {
    const {register,handleSubmit,errors }= useForm();
    const onSubmit = (data)=>console.log(data);
    return (
        <form onSubmit= {handleSubmit(onSubmit)}>
            <div className="outer">
                <div className="inner">
                    <img className="logo" src="https://www.tpbproxypirate.com/images/pirat.jpg" alt="mainlogo"/>
                    <input className="inputs" name="username" placeholder="Username" ref={register({required: true})}/>
                    <input className="inputs" name="Email" placeholder="Email" ref={register({required: true})}/>
                    <input className="inputs" name="Password" placeholder="Password" type='password' autoComplete="on" ref={register({required: true,minLength:8})} />
                    <button className="btn-1" type="submit">Sign Up!</button>
                </div>
            </div>
        </form>
    );
}

export default Signuppage
