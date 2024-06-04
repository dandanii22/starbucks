import React from "react";
import Bread from "../food/Bread";
import Cake from "../food/Cake";
import Sandwich from "../food/Sandwich";
import Soup from "../food/Soup";
import Fruit from "../food/Fruit";
import Snack from "../food/Snack";
import Icecream from "../food/Icecream";
const CategoryFood = ({ showNew }) => {
  return (
    <>
      <Bread showNew={showNew} />
      <Cake showNew={showNew} />
      <Sandwich showNew={showNew} />
      <Soup showNew={showNew} />
      <Fruit showNew={showNew} />
      <Snack showNew={showNew} />
      <Icecream showNew={showNew} />
    </>
  );
};

export default CategoryFood;
