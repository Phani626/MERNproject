import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/FormElements/Button";

import "./PlaceForm.css";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import useForm from "../../shared/Hooks/form-hook";
import Card from "../../shared/UIElements/Card";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Home",
    image:
      "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    description: "Vishnu Home",
    address: "on Earth",
    creator: "Vishnu",
    location: {
      lat: 9.107772,
      long: 79.2809516,
    },
  },
  {
    id: "2",
    title: "Ram-Setu",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/ram.jpeg?my9NsRIJSKC1ZbWG4V.FJDLs6zYcXlPp",
    description: "Ram-setu bridge",
    address: "lanka",
    creator: "Ram",
    location: {
      lat: 9.107772,
      lng: 79.2809516,
    },
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { placeId } = useParams();

  const initialState = {
    inputs: {
      title: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
    },
    isValid: true,
  };

  const [currentState, inputHandler, setInputData] = useForm(
    initialState.inputs,
    initialState.isValid
  );

  const identifiedPlace = DUMMY_PLACES.find((item) => item.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setInputData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(true);
  }, [setInputData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>No Place Found</h2>
        </Card>
      </div>
    );
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(currentState);
  };

  if (!isLoading) {
    return (
      <div className="center">
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <>
      <form className="place-form" onSubmit={formSubmitHandler}>
        <Input
          id="title"
          type="text"
          element="input"
          label="Title"
          errorText="Please enter a valid title"
          validators={[VALIDATOR_REQUIRE()]}
          value={currentState.inputs.title.value}
          isValid={currentState.inputs.title.isValid}
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          errorText="Please enter a valid description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          value={currentState.inputs.description.value}
          isValid={currentState.inputs.description.isValid}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!currentState.isValid}>
          Update Place
        </Button>
      </form>
    </>
  );
};

export default UpdatePlace;
