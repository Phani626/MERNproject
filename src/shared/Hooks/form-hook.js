import { useCallback, useReducer } from "react";

const formReducer = (state, actions) => {
  switch (actions.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        // if (!state.inputs[inputId]) {
        //   console.log(state.inputs[inputId])
        //   continue; // goto new iteration
        // }
        if (inputId === actions.inputId) {
          formIsValid = formIsValid && actions.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      // console.log(state);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [actions.inputId]: { value: actions.value, isValid: actions.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_INPUT":
      return {
        inputs: actions.inputs,
        isValid: actions.isValid,
      };
    default:
      return state;
  }
};

const useForm = (initialInputs, initialValidity) => {
  const inputHandler = useCallback((id, value, isValid) => {
    dispatchFn({
      type: "INPUT_CHANGE",
      value,
      isValid,
      inputId: id,
    });
  }, []);

  const setInputData = useCallback((inputs, isValid) => {
    dispatchFn({
      type: "SET_INPUT",
      inputs,
      isValid,
    });
  }, []);

  const [currentState, dispatchFn] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity,
  });
  return [currentState, inputHandler, setInputData];
};

export default useForm;
