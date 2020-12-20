import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

const Container = ({ children, direction, justifyContent, alignItems }) => (
  <StyledContainer direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
    {children}
  </StyledContainer>
);

export default Container;
