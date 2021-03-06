import React, { useState } from "react";
import styled from "styled-components";

const EditInput = styled.input`
  background-color: transparent;
  border: 0;
  color: #ffffff;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

function EditInputText(props) {
  const { handleOnSubmit, defaultValue } = props;
  const [input, setInput] = useState(defaultValue);

  return (
    <form
      onSubmit={() => handleOnSubmit(input)}
      onBlur={() => handleOnSubmit(input)}
    >
      <EditInput
        defaultValue={defaultValue}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default EditInputText;
