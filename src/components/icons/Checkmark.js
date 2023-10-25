// Checkmark.js
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs'; 


const iconStyle = {
  color: '#9c25c7',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Checkmark () {
  return (
    <div style={iconStyle}>
      <BsFillCheckCircleFill alt="checkmark" />
    </div>
  );
}

export default Checkmark;