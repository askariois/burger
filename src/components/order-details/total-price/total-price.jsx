import React from 'react';

function TotalPrice(props) {

   const totalBun = 0;
   props.bun.map(item => (totalBun += item.price));

   const totalOther = 0;
   props.ingredients.map(item => (totalOther += item.price));

   const total = (totalBun * 2) + totalOther;
   return (
      <span className='mr-2'>{total}</span>
   );
}


export default TotalPrice;
