import React from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import reset from "./reset.module.css";
import { Link } from "react-router-dom";

export default function ResetPage() {
  const [email, setEmail] = React.useState("");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <div className={reset.container}>
      <div className={reset.row}>
        <h2 className="mt-0">Восстановление пароля</h2>
        <form action="" className={reset.row}>
          <div>
            <Input
              type={"email"}
              placeholder={"Введите новый пароль"}
              onChange={(e) => setEmail(e.target.value)}
              name={"name"}
              icon={"ShowIcon"}
              value={email}
              error={false}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Input
              type={"email"}
              placeholder={"Введите код из письма"}
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
            <Button type="primary" size="large">
              Сохранить
            </Button>
          </div>
        </form>
        <div className={reset.text}>
          <div className="mt-20">
            Вспомнили пароль ? <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
