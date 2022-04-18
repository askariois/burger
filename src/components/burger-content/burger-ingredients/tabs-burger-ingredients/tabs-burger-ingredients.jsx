import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function TabsBurgerIngredients() {
  const [currentTab, setCurrentTab] = useState("buns");

  const onTabClick = (tab) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <h1>Соберите бургер</h1>
      <div className="flex">
        <Tab value="buns" active={currentTab === "buns"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={onTabClick}
        >
          Соусы
        </Tab>
        <Tab value="mains" active={currentTab === "mains"} onClick={onTabClick}>
          Начинки
        </Tab>
      </div>
    </>
  );
}

export default TabsBurgerIngredients;
