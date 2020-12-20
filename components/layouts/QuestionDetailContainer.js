import React from 'react';
import styled from 'styled-components';

const StyledQuestionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  heigth: auto;
  margin: auto;
  padding: 20px;
  margin-top: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuestionDetailContainer = ({ children }) => (
  <StyledQuestionDetailContainer>{children}</StyledQuestionDetailContainer>
);

export default QuestionDetailContainer;
