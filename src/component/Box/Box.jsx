import React from 'react';
import './Box.css'


function box({item}) {
  return <div className="element">
      <img src={item.image} alt="" className="images" />
      <h2 className="title2">{item.name}</h2>
      <h4 className="title2">{item.actor}</h4>




  </div>;
}

export default box;
