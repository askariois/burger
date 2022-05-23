import { baseUrl } from "../constants/global";
import { getCookie } from "./utils";

export const getOrderNumber = async (orderData: string[]) => {
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

export const forgotPassword = async (email: string) => {
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

export const passwordReset = async (password: string, code: string) => {
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

export const registerData = async (name: string, email: string, password: string) => {
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

export const loginData = async (email: string, password: string) => {
  const URL = `${baseUrl}auth/login`;
  const requestHeaders: HeadersInit | undefined = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('authorization', `${getCookie("accessToken")}`);

  const results = await fetch(URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: requestHeaders,
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
  const token = localStorage.getItem("refreshToken");
  const results = await fetch(URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: token,
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return results;
};

export const refreshToken = async () => {
  const URL_TOKEN = `${baseUrl}auth/token`;
  const token = localStorage.getItem("refreshToken");
  const results = await fetch(URL_TOKEN, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: token,
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return results;
};

export const userData = async () => {
  const URL_USER = `${baseUrl}auth/user`;
  const requestHeaders: HeadersInit | undefined = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('authorization', `${getCookie("accessToken")}`);
  const results = await fetch(URL_USER, {
    method: "GET",
    headers: requestHeaders,
  });

  return results;
};

export const userUpdate = async (name: string, email: string, pass: string) => {
  const URL_USER = `${baseUrl}auth/user`;
  const requestHeaders: HeadersInit | undefined = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('authorization', `${getCookie("accessToken")}`);
  const results = await fetch(URL_USER, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify({
      name: name,
      email: email,
      pass: pass,
    }),
  });

  return results;
};
