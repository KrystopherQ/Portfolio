import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert('Message sent successfully')
    e.preventDefault();

    emailjs.sendForm('service_5cusqyi', 'template_y3it7ab', form.current, 'P70j-1uIR9AKFCuum')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<div id="contact" className="w-full h-full flex justify-center">
  <div className="card w-3/4 bg-base-100 shadow-xl my-6">
    <div className="card-body w-full flex justify-center items-center">
    <h2 className="card-title text-4xl">Contact Me:</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='inline-block form-control w-5/6 mx-auto'>
            <label>Name</label>
            <input type="text" className="input input-bordered w-full lg:w-11/12" name="user_name" />
        </div>
        <div className='inline-block form-control w-5/6 mx-auto'>
            <label>Email</label>
            <input type="email" className="input input-bordered w-full lg:w-11/12" name="user_email" />
        </div>
        <div className='inline-block form-control w-5/6 mx-auto'>
            <label>Message</label>
            <textarea  className="textarea textarea-bordered h-48 w-full resize-none" name="message" />
            <button className="btn btn-success" type="submit" value="Send" >send</button>
      </div>
      </form>
    </div>
   </div>
  </div>
  );
};

export default Contact;