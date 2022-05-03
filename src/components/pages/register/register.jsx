import React from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import registr from "./registr.module.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [show, setShow] = React.useState(false);
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    setShow(true);
  };
  return (
    <div className={registr.container}>
      <div className={registr.row}>
        <h2 className="mt-0">Регистрация</h2>
        <div>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => e.target.value}
            name={"name"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mt-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={(e) => e.target.value}
            name={"name"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mt-6">
          <Input
            type={show ? "password" : "text"}
            placeholder={"Пароль"}
            onChange={(e) => e.target.value}
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
            Зарегистрироваться
          </Button>
        </div>
        <div className={registr.text}>
          <div className="mt-20">
            Уже зарегистрированы ? <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
