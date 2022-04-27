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

export const passwordReset = async (email) => {
  const URL_ORDER = `${baseUrl}password-reset`;
  const results = await fetch(URL_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email: email }),
  });
  console.log(results);
  return results;
};

export const newUser = async (email) => {
  const URL_ORDER = `${baseUrl}auth/register`;
  const results = await fetch(URL_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: "test-data@yandex.ru",
      password: "password",
      name: "Username",
    }),
  });

  return results;
};
