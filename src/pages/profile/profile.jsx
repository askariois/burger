import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profile from "./profile.module.css";
import { logoutUser } from "../../services/actions/login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { PROFILE_EMAIL, PROFILE_NAME } from "../../services/actions/profile";

export default function ProfilePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push("/");
  };

  const getUser = useSelector((store) => store.loginData.data);
  const getUpdateUser = useSelector((store) => store.loginData.newData);
  console.log(getUpdateUser);
  return (
    <div className={profile.container}>
      <div className={profile.row}>
        <div className={profile.menu}>
          <a href="#">Профиль</a>
          <a href="#">История заказов</a>
          <Link to="" onClick={logout}>
            Выход
          </Link>
          <div className={profile.description}>
            В этом разделе вы можете изменить свои персональные данные
          </div>
        </div>
        <form action="">
          <div>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) =>
                dispatch({
                  type: PROFILE_NAME,
                  name: e.target.value,
                })
              }
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
              type={"email"}
              placeholder={"Логин"}
              onChange={(e) =>
                dispatch({
                  type: PROFILE_EMAIL,
                  name: e.target.value,
                })
              }
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
              onChange={(e) => e.target.value}
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
          <div className="row mt-5">
            <Button type="primary" size="small">
              Сохранить
            </Button>
            <Button type="secondary" size="small">
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
