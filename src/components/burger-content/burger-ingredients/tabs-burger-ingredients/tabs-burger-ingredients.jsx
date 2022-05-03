import { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function TabsBurgerIngredients({ inViewBuns, inViewMains, inViewSauces }) {
  const [currentTab, setCurrentTab] = useState("buns");

  const onTabClick = (tab) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("buns");
    } else if (inViewMains) {
      setCurrentTab("mains");
    } else if (inViewSauces) {
      setCurrentTab("sauces");
    }
  }, [inViewBuns, inViewMains, inViewSauces]);

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
