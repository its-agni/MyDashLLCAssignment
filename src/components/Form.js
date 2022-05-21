import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [isValid, setValid] = useState("true");
  const [isChecked, setChecked] = useState(false);
  const [enteredPassword, setPassword] = useState(true);
  const epassword = useRef();
  const mail = useRef();
  const name = useRef();
  const confirmPass = useRef();
  const phone = useRef();

  const history = useNavigate();

  const checkHandler = () => {
    setChecked(!isChecked);
  };

  const submitHandler = (event) => {
    const cMail = mail.current.value;
    const cName = name.current.value;
    const cPass = epassword.current.value;
    const ccPass = confirmPass.current.value;
    const cPhone = phone.current.value;
    event.preventDefault();
    if (
      cMail.trim() === "" ||
      cName.trim() === "" ||
      cPhone.trim() === "" ||
      cPhone.toString().trim().length < 10 ||
      cPhone.toString().trim().length > 10 ||
      cPass.trim() === ""
    ) {
      setPassword(true);
      setValid(false);
      console.log(isChecked);
      return;
    } else if (cPass !== ccPass) {
      setPassword(false);
      setValid(true);
      console.log(isChecked);
      return;
    }
    console.log(isChecked);
    history("/D3");
    setPassword(true);
    setValid(true);
  };

  return (
    <div>
      <h2>Create an account</h2>
      {!isValid && (
        <p className="error">Error While Entering Data Check And Try Again</p>
      )}
      {!enteredPassword && <p className="error"> Your passwords don't match</p>}

      <form onSubmit={submitHandler}>
        <label>Your email address</label>
        <br />
        <input
          className="field"
          ref={mail}
          type="email"
          autoComplete="username"
        />
        <br />

        <label>Your password</label>
        <br />
        <input
          className="field"
          ref={epassword}
          type="password"
          autoComplete="new-password"
        />
        <br />

        <label>Confirm your password</label>
        <br />
        <input className="field" type="password" ref={confirmPass} />
        <br />

        <label>Your full name</label>
        <br />
        <input className="field" type="text" ref={name} />
        <br />

        <label>Your phone number</label>
        <br />
        <input
          className="field"
          type="number"
          ref={phone}
          minLength="10"
          maxLength="10"
        />
        <br />

        <input type="checkbox" checked={isChecked} onChange={checkHandler} />
        <label>I read and agree Terms and Conditions</label>
        <br />

        {isChecked ? (
          <button className="submit" type="submit">
            Create account
          </button>
        ) : (
          <button className="submit disable" disabled={true}>
            Create account
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
