import React from 'react';
import { Container, Text, Input } from '../';

const RadioButton = ({ choice, url, onSelectionChange, index }) => {
  return (
    <Container direction="row" justifyContent="flex-start" alignItems="center">
      <Input type="radio" value={url} id={index} name="choice" onChange={onSelectionChange} />
      <Text fontSize="24">{choice}</Text>
    </Container>
  );
};

export default RadioButton;
