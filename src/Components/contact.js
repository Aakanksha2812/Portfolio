import "./contact.css";
//import Phone from "../../img/phone.png";
//import Email from "../../img/email.png";
//import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
//import emailjs from "emailjs-com";
/*import { ThemeContext } from "../../context";*/
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  /* const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;*/

  /* const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };*/
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92zesdc",
        "template_37m0g2i",
        e.target,
        "8dds32JIWBE-ljXrj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" alt="" />
              shindeaakanksha28@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" alt="" />
              at post rase
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> Get in touch.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              /*style={{backgroundColor: darkMode && "#333"}}*/ type="text"
              placeholder="Name"
              name="name"
            />
            <input
              /*style={{backgroundColor: darkMode && "#333"}}*/ type="text"
              placeholder="Subject"
              name="subject"
            />
            <input
              /*style={{backgroundColor: darkMode && "#333"}}*/ type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              /*style={{backgroundColor: darkMode && "#333"}}*/ rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
