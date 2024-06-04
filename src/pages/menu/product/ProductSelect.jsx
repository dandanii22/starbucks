import { useState } from "react";
import { SelectBox } from "./ProductStyle";
import DropDown from "./DropDown";

const ProductSelect = () => {
  const [showOptions, SetShowOptions] = useState(false);

  return (
    <SelectBox>
      <div>
        <label>상세분류</label>
        <button onClick={() => SetShowOptions(!showOptions)}>
          <i className="xi-angle-down-min"></i>
        </button>
      </div>

      <ul>{showOptions && <DropDown />}</ul>
    </SelectBox>
  );
};

export default ProductSelect;
