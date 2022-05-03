import React, { useCallback, useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Redirect } from "react-router-dom";

import forgot from "./forgot.module.css";
import { Link } from "react-router-dom";
import {
  EMAIL_FOTGOT_PASSOWORD,
  postPasswordForgot,
} from "../../../services/actions/forgot-password";
import { useDispatch, useSelector } from "react-redux";

export default function ForgotPage() {
  // const [email, setEmail] = useState("");
  const emailForgotPassword = useSelector((store) => store.forgotPassword);
  console.log(emailForgotPassword.email);
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };
  const dispatch = useDispatch();

  let onForgotPassword = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postPasswordForgot(emailForgotPassword.email));
    },
    [emailForgotPassword.email]
  );

  return (
    <div className={forgot.container}>
      <div className={forgot.row}>
        <h2 className="mt-0">Восстановление пароля</h2>
        <form action="" className={forgot.row}>
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
            <Button type="primary" size="large" onClick={onForgotPassword}>
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
