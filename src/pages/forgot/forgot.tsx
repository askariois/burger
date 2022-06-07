import React, { useCallback, useRef, useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import forgot from "./forgot.module.css";
import { Link, useHistory, Redirect, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  EMAIL_FOTGOT_PASSOWORD,
  postPasswordForgot,
} from "../../services/actions/forgot-password";
import { TRootState } from "../../services/types/redux";
export default function ForgotPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const emailForgotPassword = useSelector((store: TRootState) => store.forgotPassword);
  const userData = useSelector((store: TRootState) => store.loginData);


  const inputRef = useRef<HTMLInputElement>(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current!.focus(), 0);
  };

  const onForgotPassword = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(postPasswordForgot(emailForgotPassword.email));
      history.push("/reset-password");
    },
    [emailForgotPassword.email]
  );

  if (Object.keys(userData.data).length !== 0) {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />;
  }

  return (
    <div className={forgot.container}>
      <div className={forgot.row}>
        <h2 className="mt-0">Восстановление пароля</h2>
        <form action="" className={forgot.row} onSubmit={onForgotPassword}>
          <div>
            <Input
              type={"email"}
              placeholder={"Укажите e-mail"}
              onChange={(e) =>
                dispatch({
                  type: EMAIL_FOTGOT_PASSOWORD,
                  payload: e.target.value,
                })
              }
              name={"name"}
              value={emailForgotPassword.email}
              error={false}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Button type="primary" size="large">
              Восстановить
            </Button>
          </div>
        </form>
        <div className={forgot.text}>
          <div className="mt-20">
            Вспомнили пароль ? <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
