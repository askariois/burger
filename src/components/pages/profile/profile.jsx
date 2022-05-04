import React from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profile from "./profile.module.css";

export default function ProfilePage() {
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  return (
    <div className={profile.container}>
      <div className={profile.row}>
        <div className={profile.menu}>
          <a href="#" >Профиль</a>
          <a href="#">История заказов</a>
          <a href="#">Выход</a>
          <div className={profile.description}>В этом разделе вы можете изменить свои персональные данные</div>
        </div>
        <form action="">
          <div>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setValue(e.target.value)}
              icon={"EditIcon"}
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
              placeholder={"Логин"}
              onChange={(e) => setValue(e.target.value)}
              icon={"EditIcon"}
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
              icon={"EditIcon"}
              name={"name"}
              error={false}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
