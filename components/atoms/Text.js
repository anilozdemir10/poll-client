import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom}px;
  margin-top: ${props => props.marginTop}px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Text = ({ fontSize, fontWeight, marginTop, marginBottom, children }) => (
  <StyledText fontSize={fontSize} marginTop={marginTop} marginBottom={marginBottom} fontWeight={fontWeight}>
    {children}
  </StyledText>
);

export default Text;
