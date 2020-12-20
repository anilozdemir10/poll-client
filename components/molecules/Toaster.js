import React from 'react';
import styled from 'styled-components';
import { Text } from '../';

const StyledToaster = styled.div`
  position: absolute;
  top: 10px;
  z-index: 9999;
  height: 60px;
  width: 550px;
  background-color: ${props => (props.toasterType === 'success' ? '#ddf9d3' : '#ff5050')};
  border: 1px solid #3ca420;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Toaster = ({ isShow, message, toasterType }) => {
  return (
    <StyledToaster style={{ display: isShow ? 'flex' : 'none' }} isShow={isShow} toasterType={toasterType}>
      <Text fontSize="21">{message}</Text>
    </StyledToaster>
  );
};

export default Toaster;
