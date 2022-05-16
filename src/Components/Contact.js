import emailjs from "emailjs-com";
import React, {useState} from 'react';
import '../css/contact.css';
import Tabs from './Tabs';

export default function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);

    function sendEmail(e) {
      e.preventDefault();
      console.log(name)
      console.log(subject)
      console.log(email)
      console.log(message)
      if (name.length != 0 && subject.length != 0 && email.length != 0 && message.length != 0){
        emailjs.sendForm('service_j5lgbzo', 'email_template', e.target, 'Nm4l5ClwDqare5ZMq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setDisplayMessage(true);
        }
      else{
        alert("Must fill all feilds")
        e.target.reset()
      }
    }

    function handleNameChange(e){
      setName(e.target.value);
    }

    function handleEmailChange(e){
      setEmail(e.target.value);
    }

    function handleSubjectChange(e){
      setSubject(e.target.value);
    }

    function handleMessageChange(e){
      setMessage(e.target.value);
    }

    function navToLinkedIn(){
      window.open('https://www.linkedin.com/in/ishan-s/')
    }

    var ReactRotatingText = require('react-rotating-text');

    return(
        <div className="contact">
          <Tabs/>
          <h2>Connect via <ReactRotatingText items={["LinkedIn", "Email"]} /></h2>
          <div className="contact-icons">
            <img onClick={navToLinkedIn} alt="LinkedIn" src="../linkedin-logo.png" style={{width:'100px', marginRight:'5%'}}></img>
            <a href="mailto:myemailaddress@gmail.com">
              <img alt="Email" src="../email.png" style={{width:'90px',}}></img>
              <h5>ishan423@gmail.com</h5>
            </a>
          </div>
          <h2>Or send an email via the form below: </h2>
          <div className="form">
              <form onSubmit={sendEmail}>
                  <div>
                      <div>
                          <input className="input-box" type="text" placeholder="Name" name="name" onChange={handleNameChange}/>
                      </div>
                      <div>
                          <input className="input-box" type="email" placeholder="Email Address" name="email" onChange={handleEmailChange}/>
                      </div>
                      <div>
                          <input className="input-box" type="text" placeholder="Subject" name="subject" onChange={handleSubjectChange}/>
                      </div>
                      <div >
                          <textarea className="input-box-message" id="" cols="30" rows="8" placeholder="Your message" name="message" onChange={handleMessageChange}></textarea>
                      </div>
                      <div>
                          <input className="send-button" type="submit" value="Send Message"></input>
                      </div>
                  </div>
              </form>
              { displayMessage ? <h2>Thank you for reaching out. I will get back to you shortly</h2> : null } </div>
        </div>
    )
}