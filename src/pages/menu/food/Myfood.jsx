import { FoodChoice } from "./FoodStyle";
import data from "../../../assets/api/foodData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMymenus } from "../../../store/modules/authSlice";
import { useRef, useState } from "react";

const Myfood = ({ setContet, content }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authR);
  const { foodID, category } = useParams();
  const { myMenus } = user;
  const [foodOption, setFoodOption] = useState({ warm: "따뜻하게 데움" });

  const foodData = data.filter((item) => {
    return item.category === category;
  });

  const datafood = foodData.map((item2) => item2.data).flat();
  const thisFood = datafood.find((item3) => item3.id === Number(foodID));
  const imgData = foodData[0].data.map((data1) => data1.imgurl);

  const onChangeOption = (e) => {
    if (e.target.value === "warm") {
      setFoodOption({
        warm: "따뜻하게 데움",
      });
    } else {
      setFoodOption({
        nowarm: "데우지 않음",
      });
    }
  };

  const onSaveBtn = (e) => {
    e.preventDefault();
    dispatch(
      addMymenus({
        breadNo: foodID,
        kor: "",
        imgurl: "",
        cata: 1,
        option: { ...foodOption },
        data: "2024-06-10",
        isChk: false,
      })
    );
  };

  return (
    <FoodChoice>
      <div className="left">
        <img src={thisFood.imgurl}></img>
        <div className="myselect">
          <h3>추가옵션</h3>
          <select name="" id="" onChange={(e) => onChangeOption(e)}>
            <option value="none">선택안함</option>
            <option value="warm">따뜻하게 데움</option>
            <option value="notwarm">데우지 않음</option>
          </select>
        </div>
      </div>
      <div className="btnwrap">
        <button onClick={(e) => onSaveBtn(e)}>등록</button>
        <button onClick={() => setContet(!content)}>취소</button>
      </div>
    </FoodChoice>
  );
};

export default Myfood;
