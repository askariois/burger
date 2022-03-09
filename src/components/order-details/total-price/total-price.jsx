import React from 'react';

import { BunPriceContext, OtherPriceContext } from '../../../services/constructorPriceContext';



function TotalPrice() {
   let bunPrice = React.useContext(BunPriceContext);
   let otherPrice = React.useContext(OtherPriceContext);

   let totalBun = 0;
   bunPrice.map(item => (totalBun += item.price));

   let totalOther = 0;
   otherPrice.map(item => (totalOther += item.price));

   let total = (totalBun * 2) + totalOther;
   return (
      <span className='mr-2'>{total}</span>
   );
}


export default TotalPrice;
