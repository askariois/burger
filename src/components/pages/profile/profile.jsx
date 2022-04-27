import React from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import login from "./login.module.css";
import { Link } from "react-router-dom";

export default function    () {
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  return (
    <div className={login.container}>
      <div className={login.row}>
        <h2 className="mt-0">Вход</h2>
        <div>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={(e) => setValue(e.target.value)}
            name={"name"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mt-6">
          <Input
            type={"text"}
            placeholder={"Пароль"}
            onChange={(e) => setValue(e.target.value)}
            icon={"ShowIcon"}
            name={"name"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mt-6">
          <Button type="primary" size="large">
            Войти
          </Button>
        </div>
        <div className={login.text}>
          <div className="mt-20">
            Вы — новый пользователь?{" "}
            <Link to="/register">Зарегистрироваться</Link>
          </div>
          <div className="mt-4">
            Забыли пароль?
            <Link to="/forgot-password"> Восстановить пароль</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
