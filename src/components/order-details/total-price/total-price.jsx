import React from "react";
import { useSelector } from "react-redux";

function TotalPrice() {
  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients.ingredients
  );
  let total = 0;
  constructorIngredients.map(
    (item) => (total += item.type === "bun" ? item.price * 2 : item.price)
  );

  return <span className="mr-2">{total}</span>;
}

export default TotalPrice;
