import React, { useCallback, useReducer } from "react";

import "./NewPlace.css";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const formReducer = (state, actions) => {
  switch (actions.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === actions.type) {
          formIsValid = formIsValid && actions.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [actions.inputId]: { value: actions.value, isValid: actions.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlaces = (props) => {
  const initialState = {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  };

  const [currentState, dispatchFn] = useReducer(formReducer, initialState);

  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid value."
        onInput={titleInputHandler}
      />
      <Input
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description (Atleast 5 Characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlaces;
