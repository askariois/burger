import { baseUrl } from "../constants/global";
import { getCookie } from "./utils";

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

export const forgotPassword = async (email) => {
  const URL_ORDER = `${baseUrl}password-reset`;
  const results = await fetch(URL_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email: email }),
  });
  return results;
};

export const passwordReset = async (password, code) => {
  const URL_ORDER = `${baseUrl}password-reset/reset`;
  const results = await fetch(URL_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  });
  return results;
};

export const registerData = async (name, email, password) => {
  console.log(name, email, password);
  const URL_ORDER = `${baseUrl}auth/register`;
  const results = await fetch(URL_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });

  return results;
};

export const loginData = async (email, password) => {
  const URL = `${baseUrl}auth/login`;
  const results = await fetch(URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return results;
};

export const logoutData = async () => {
  const URL = `${baseUrl}auth/logout`;
  const results = await fetch(URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return results;
};

export const refreshToken = async () => {
  const URL_TOKEN = `${baseUrl}auth/token`;
  const results = await fetch(URL_TOKEN, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return results;
};

export const userData = async () => {
  const URL_USER = `${baseUrl}auth/user`;
  const results = await fetch(URL_USER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: getCookie("accessToken"),
    },
  });

  return results;
};
