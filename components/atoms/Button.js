import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  align-self: center;
  font-size: 16px;
  background-color: ${props => (props.buttonType === 'success' ? '#56d287' : 'black')};
  border: 1px solid ${props => (props.buttonType === 'success' ? '#56d287' : 'black')};
  padding: 12px;
  margin: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &: focus {
    outline: none;
  }
`;

const Button = ({ children, buttonType, onClick }) => (
  <StyledButton buttonType={buttonType} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
