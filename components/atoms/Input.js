import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  border: 1px solid;
  margin: 10px;
  width: 30%;
  padding: 15px;
  border-radius: 15px;

  &: focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledRadioInput = styled.input`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`;

const Input = ({ value, id, name, type, placeholder, onChange }) => {
  return type === 'radio' ? (
    <StyledRadioInput type={type} value={value} id={id} name={name} placeholder={placeholder} onChange={onChange} />
  ) : (
    <StyledTextInput type={type} placeholder={placeholder} onChange={onChange} />
  );
};

export default Input;
