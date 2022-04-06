import React from "react";
import { useSelector } from "react-redux";

function TotalPrice() {
  const construcorIngredients = useSelector(
    (store) => store.construcorIngredient.constructorIngredients
  );

  console.log(construcorIngredients);

  let total = 0;
  construcorIngredients.map(
    (item) => (total += item.type === "bun" ? item.price * 2 : item.price)
  );

  return <span className="mr-2">{total}</span>;
}

export default TotalPrice;
