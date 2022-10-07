import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/FormElements/Button";
import Input from "../../shared/FormElements/Input";
import useForm from "../../shared/Hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./Auth.css";
import Card from "../../shared/UIElements/Card";
import { AuthContext } from "../../shared/Context/store";

const Auth = () => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const [isLogMode, setIsLogMode] = useState(true);
  const [currentState, inputHandler, setInputData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  //console.log(currentState);
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.isLogin();
    console.log("Logged in !!");
    navigate("/");
  };

  const switchModeHandler = () => {
    if (!isLogMode) {
      setInputData(
        {
          ...currentState.inputs,
          name: undefined,
        },
        currentState.inputs.email.isValid &&
          currentState.inputs.password.isValid
      );
    } else {
      setInputData(
        {
          ...currentState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogMode((prevIsLogMode) => !prevIsLogMode);
  };

  return (
    <Card className="authentication">
      <h2>Login</h2>
      <hr />
      <form onSubmit={submitHandler}>
        {!isLogMode && (
          <Input
            id="name"
            element="input"
            label="User-Name"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
          />
        )}
        <Input
          id="email"
          element="input"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid Email"
        ></Input>
        <Input
          id="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
          errorText="Please enter a valid password."
        ></Input>
        <Button type="submit" disabled={!currentState.isValid}>
          {isLogMode ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLogMode ? "Sign Up" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
