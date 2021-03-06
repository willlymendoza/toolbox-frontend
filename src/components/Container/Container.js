import React, { useState } from "react";
import Form from "../Form/Form";
import TextListContainer from "../TextListContainer/TextListContainer";
import { addText, addError } from "../../redux/textDucks";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();
  const { array: textArray, error } = useSelector((store) => store.textData);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) return;

    dispatch(addText(inputText));
    setInputText("");
  };

  const validateInput = () => {
    if (inputText.trim() === "") {
      dispatch(addError("El texto es requerido"));
      return true;
    }

    return false;
  };

  return (
    <div className="container" data-testid="container">
      <Form
        handleInputChange={handleInputChange}
        handleOnSubmit={handleOnSubmit}
        inputText={inputText}
        inputError={error}
      />
      <TextListContainer textArray={textArray} />
    </div>
  );
};

export default Container;
