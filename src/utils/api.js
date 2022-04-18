import { baseUrl } from "../constants/global";

export const getOrderNumber = async (orderData) => {
  const URL_ORDER = `${baseUrl}orders`;
  const results = await fetch(URL_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ ingredients: orderData }),
  });

  return results;
};
