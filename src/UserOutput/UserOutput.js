import React from 'react';
import UserInput from '../UserInput/UserInput';

import './UserOutput.css'
const userOutput = (props) => {

  return (
    <div className='UserOutput'>
      <p> I am {props.name} and I can do a lot</p>
    </div>
  )
};

export default userOutput;
