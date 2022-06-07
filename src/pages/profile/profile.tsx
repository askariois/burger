import { useCallback, useRef, useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profile from "./profile.module.css";
import { logoutUser } from "../../services/actions/login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { userUpdateData } from "../../services/actions/profile";
import { TRootState } from "../../services/types/redux";

export default function ProfilePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [prName, setPrName] = useState("");
  const [prLogin, setPrLogin] = useState("");
  const [prPassword, setPrPassword] = useState("");
  const [prshow, setPrShow] = useState(true);

  const getUser: any = useSelector((store: TRootState) => store.loginData.data);
  

  const isProfile = !!useRouteMatch("/profile");
  const isOrder = !!useRouteMatch("/profile/orders");

  const inputRef = useRef<HTMLInputElement>(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current!.focus(), 0);
  };
  const onIconClickPassword = () => {
    setTimeout(() => inputRef.current!.focus(), 0);
    setPrShow(!prshow);
  };

  const logout = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(logoutUser());
      history.replace({ pathname: "/" });
    },
    [history]
  );

  // Обновление пользователя
  const onSave = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        userUpdateData(
          prName === null ? getUser.name : prName,
          prLogin === null ? getUser.email : prLogin,
          prPassword
        )
      );
    },
    [prName, prLogin, prPassword]
  );

  return (
    <div className={profile.container}>
      <div className={profile.row}>
        <div className={profile.menu}>
          <Link to="/profile" className={isProfile ? `${profile.active}` : ""}>
            Профиль
          </Link>
          <Link
            to="/profile/orders"
            className={isOrder ? `${profile.active}` : ""}
          >
            История заказов
          </Link>
          <Link to="/" onClick={logout}>
            Выход
          </Link>
          <div className={profile.description}>
            В этом разделе вы можете изменить свои персональные данные
          </div>
        </div>
        <form action="" onSubmit={onSave}>
          <div>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => {
                setPrName(e.target.value);
              }}
              icon={"EditIcon"}
              name={"profile_name"}
              value={
                prName === null
                  ? getUser.name === undefined
                    ? ""
                    : getUser.name
                  : prName
              }
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
              onChange={(e) => {
                setPrLogin(e.target.value);
              }}
              icon={"EditIcon"}
              name={"profile_email"}
              value={
                prLogin === null
                  ? getUser.email === undefined
                    ? ""
                    : getUser.email
                  : prLogin
              }
              error={false}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Input
              type={prshow ? "password" : "text"}
              placeholder={"Пароль"}
              onChange={(e) => setPrPassword(e.target.value)}
              icon={prshow ? "ShowIcon" : "HideIcon"}
              name={"profile_password"}
              value={prPassword}
              ref={inputRef}
              onIconClick={onIconClickPassword}
              size={"default"}
            />
          </div>
          <div className="row mt-5">
            <Button type="primary" size="small">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
