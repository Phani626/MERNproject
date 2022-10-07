import React from "react";

import "./PlaceForm.css";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import useForm from "../../shared/Hooks/form-hook";

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
    address1: {
      value: "",
      isValid: false,
    },
  },
  isValid: false,
};

const NewPlaces = (props) => {
  const [currentState, inputHandler] = useForm(
    initialState.inputs,
    initialState.isValid
  );

  const placeAdditionHandler = (event) => {
    event.preventDefault();
    console.log(currentState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeAdditionHandler}>
      <Input
        element="input"
        type="text"
        label="Title"
        id="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid value."
        onInput={inputHandler}
      />
      <Input
        element="textarea"
        label="Description"
        id="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description (Atleast 5 Characters)."
        onInput={inputHandler}
      />
      <Input
        element="input"
        label="Address"
        id="address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Address ."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!currentState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlaces;
