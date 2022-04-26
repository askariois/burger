import { useEffect } from "react";

import AppHeader from "../../app-header/app-header";
import BurgerIngredients from "../../burger-content/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../burger-content/burger-constructor/burger-constructor";

import app from "./home-page.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { loadIngredients } from "../../../services/actions";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <div className={`${app.container}`}>
        <div className={`${app.flex} ${app.justify_between}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </div>
    </>
  );
}
