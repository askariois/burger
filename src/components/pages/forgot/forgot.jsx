import React, { useCallback } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import forgot from "./forgot.module.css";
import { Link } from "react-router-dom";
import { postPasswordForgot } from "../../../services/actions/forgot-password";
import { useDispatch } from "react-redux";

export default function ForgotPage() {
  const [email, setEmail] = React.useState("");

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };
  const dispatch = useDispatch();

  let onForgotPassword = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postPasswordForgot(email));
    },
    [email]
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
              onChange={(e) => setEmail(e.target.value)}
              name={"name"}
              value={email}
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
