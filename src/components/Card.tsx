import React from 'react';
import '.././Card.css';
import killuaImage from '../assets/images/killua.jpeg';

function Card() {
  return (
    <div className='backCard'>
      <img src={killuaImage} width='100px' height='100px' alt="Killua" />
    </div>
  );
}

export default Card;
