import SubVisual from "../../../components/ProductSubVisual";
import Mug from "./Mug";
import Glass from "./Glass";

import { ProductWrap } from "./ProductStyle";
import { useState } from "react";
import Plastic from "./Plastic";
import Stainless from "./Stainless";
import Flask from "./Flask";
import Accessory from "./Accessory";
import Setproduct from "./Setproduct";
import ProductInput from "./ProductInput";
import ProductSelect from "./ProductSelect";
import Tea from "./Tea";
const FoodForm = () => {
  const [allcheck, setAllCheck] = useState(true);

  const checkEvent = () => {
    if (checked) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  };

  return (
    <ProductWrap>
      <SubVisual />
      <div className="inner">
        <ProductInput />
        <div className="foodmenu">
          <div className="select">
            <ProductSelect />
          </div>

          <div className="food">
            <Mug />
            <Glass />
            <Plastic />
            <Stainless />
            <Flask />
            <Accessory />
            <Setproduct />
            <Tea />
          </div>
        </div>
      </div>
    </ProductWrap>
  );
};

export default FoodForm;
