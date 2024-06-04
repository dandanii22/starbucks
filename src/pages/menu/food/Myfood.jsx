import { FoodChoice } from "./FoodStyle";
import data from "../../../assets/api/foodData";
import { useParams } from "react-router-dom";

const Myfood = ({ setContet, content }) => {
  const { foodID, category } = useParams();

  const foodData = data.filter((item) => {
    return item.category === category;
  });

  const datafood = foodData.map((item2) => item2.data).flat();

  const thisFood = datafood.find((item3) => item3.id === Number(foodID));
  const imgData = foodData[0].data.map((data1) => data1.imgurl);
  return (
    <FoodChoice>
      <div className="left">
        {/* {imgData.map(
          (data2, idx) =>
            idx < 1 && (
              <li>
                <img src={data2} />
              </li>
            )
        )} */}
        <img src={thisFood.imgurl}></img>
        <div className="myselect">
          <h3>추가옵션</h3>
          <select name="" id="">
            <option value="none">선택안함</option>
            <option value="wram">따뜻하게 데움</option>
            <option value="notwarm">데우지 않음</option>
          </select>
        </div>
      </div>
      <div className="btnwrap">
        <button>등록</button>
        <button onClick={() => setContet(!content)}>취소</button>
      </div>
    </FoodChoice>
  );
};

export default Myfood;
