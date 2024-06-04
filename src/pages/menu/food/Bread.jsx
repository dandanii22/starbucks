import { FoodMenu } from "./FoodStyle";
import data from "../../../assets/api/foodData";
import { Link } from "react-router-dom";

const Bread = ({ showNew }) => {
  return (
    <FoodMenu>
      <div className="inner">
        <h2>브레드</h2>
        <ul>
          {showNew.new === true
            ? data.map((item) => {
                if (item?.category === "bread") {
                  return item?.data?.map((item2) => {
                    if (item2.icon === "new") {
                      return (
                        <Link to={`${item.category}/${item2.id}`}>
                          <li key={item2.id}>
                            <img src={item2.imgurl}></img>
                            <p>{item2.Kortitle}</p>
                          </li>
                        </Link>
                      );
                    }
                  });
                }
              })
            : data?.map((item) => {
                if (item?.category === "bread") {
                  return item?.data?.map((item2) => {
                    return (
                      <Link to={`${item.category}/${item2.id}`}>
                        <li key={item2.id}>
                          <img src={item2.imgurl}></img>
                          <p>{item2.Kortitle}</p>
                        </li>
                      </Link>
                    );
                  });
                }
              })}
        </ul>
      </div>
    </FoodMenu>
  );
};

export default Bread;