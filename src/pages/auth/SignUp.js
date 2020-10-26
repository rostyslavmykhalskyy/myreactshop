import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userSignUp } from "../../store/actions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(userSignUp({ email, password }));
      history.push("/");
    } catch (e) {
      setError(e.message);
      setTimeout(() => setError(false), 1500);
    }
  };
  return (
    <form
      className="authForm"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <h3 className="authForm__title">Create new account</h3>
      <div className="authForm__inputs">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Type email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </div>
      <hr />
      <p>Or use your Google account</p>
      <button>G</button>
      {/* {if(true){console.log('sdsd')}} */}
      {error && <p className="errorMessage">{error}</p>}
    </form>
  );
};

export default Signup;
