import React from 'react';
import img from './errorMessage.png'
import './erroMessage.css'
const ErrorMesage = () => {
   return(
<>
      <span className='errorMessage'>
   Something went wrong, could not get information
   </span> 
      <img src={img}></img>
</>
   )
}
export default ErrorMesage;