import DrinkSort from "../../components/DrinkMenu/DrinkSort";
import { DrinkMenuWrap } from "./drinkMenuStyle";
import { useState } from "react";
import DrinkMain from "../../components/DrinkMenu/DrinkMain";

const DrinkMenu = () => {
  return (
    <DrinkMenuWrap>
      <div className="inner">
        <DrinkSort />
        <DrinkMain />
      </div>
    </DrinkMenuWrap>
  );
};

export default DrinkMenu;
