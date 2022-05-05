import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profile from "./profile.module.css";
import { logoutUser } from "../../../services/actions/login";
import { useDispatch, useSelector } from "react-redux";
import { userGetData } from "../../../services/actions/profile";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  useEffect(() => {
    dispatch(userGetData());
  }, [dispatch]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const getUser = useSelector((store) => store.loginData.data);

  return (
    <div className={profile.container}>
      <div className={profile.row}>
        <div className={profile.menu}>
          <a href="#">Профиль</a>
          <a href="#">История заказов</a>
          <a href="#" onClick={logout}>
            Выход
          </a>
          <div className={profile.description}>
            В этом разделе вы можете изменить свои персональные данные
          </div>
        </div>
        <form action="">
          <div>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setValue(e.target.value)}
              icon={"EditIcon"}
              name={"profile_name"}
              value={getUser.name === undefined ? "" : getUser.name}
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
              name={"profile_email"}
              value={getUser.email === undefined ? "" : getUser.email}
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
              name={"profile_password"}
              value={""}
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
