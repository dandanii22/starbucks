import { useState } from "react";
import { FoodForm } from "./FoodStyle";
import foodThemaSort from "../../../assets/api/foodThemeSort";
import FoodThemaSort from "./FoodThemaSort";

const FoodThemeInput = ({
  setOnThema,
  setCurrentThema,
  currentThema,
  onThema,
}) => {
  const [showTheme, setShowTheme] = useState(true);

  const changeButton = () => {
    setOnThema(!showTheme);
    setSelectShow((selectShow) => !selectShow);
  };

  return (
    <FoodForm>
      <div className="top">
        <h2>분류보기</h2>
        <p onClick={() => setShowTheme(!showTheme)}>
          <i className="xi-angle-up"></i>
        </p>
      </div>
      {showTheme && (
        <>
          <div className="btn">
            <button className={showTheme ? "on" : ""} onClick={changeButton}>
              카테고리
            </button>
            <button className={showTheme ? "" : "on"} onClick={changeButton}>
              테마
            </button>
          </div>
          <ul className="themaSort">
            {foodThemaSort.map((item) => (
              <FoodThemaSort
                key={item.id}
                item={item}
                setCurrentThema={setCurrentThema}
                currentThema={currentThema}
              />
            ))}
          </ul>
        </>
      )}
    </FoodForm>
  );
};

export default FoodThemeInput;
