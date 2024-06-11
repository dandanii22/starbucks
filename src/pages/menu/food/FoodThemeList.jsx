import foodThemedata from "../../../assets/api/foodTheme";
import FoodThemeItem from "./FoodThemeItem";
import { FoodListUl } from "./FoodStyle";
import { useState } from "react";
import Bread from "./Bread";
import Cake from "./Cake";
import Sandwich from "./Sandwich";
import Soup from "./Soup";
import Fruit from "./Fruit";
import Snack from "./Snack";
import Icecream from "./Icecream";

const FoodThemeList = ({ currentThema, setShowNew, showNew, onThema }) => {
  const currentThemadata = foodThemedata.find(
    (item) => item.thema === currentThema
  );

  return (
    <FoodListUl>
      {currentThemadata.data.map((item) => (
        <FoodThemeItem key={item.id} item={item} />
      ))}
    </FoodListUl>
  );
};

export default FoodThemeList;
