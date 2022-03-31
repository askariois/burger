import React, { useEffect } from "react";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-content/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-content/burger-constructor/burger-constructor";

import app from "./app.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ingredientLoad } from "../../services/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientLoad());
  }, []);

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

export default App;
