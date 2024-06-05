import { ProductMenu } from "./ProductStyle";
import data from "../../../assets/api/productData";
import { Link } from "react-router-dom";

const Mug = ({ showNew }) => {
  return (
    <ProductMenu>
      <div className="inner">
        <h2>머그</h2>
        <ul>
          {showNew.new === true || showNew.limited === true
            ? data.map((item) => {
                if (item?.category === "mug") {
                  return item?.data?.map((item2) => {
                    if (
                      (showNew.new && item2.icon === "new") ||
                      (showNew.limited && item2.icon === "limit")
                    ) {
                      return (
                        <Link to={`${item.category}/${item2.id}`}>
                          <li key={item2.id}>
                            <img src={item2.imgurl}></img>
                            <p>{item2.title}</p>
                          </li>
                        </Link>
                      );
                    }
                  });
                }
              })
            : data?.map((item) => {
                if (item?.category === "mug") {
                  return item?.data?.map((item2) => {
                    return (
                      <Link to={`${item.category}/${item2.id}`}>
                        <li key={item2.id}>
                          <img src={item2.imgurl}></img>
                          <p>{item2.title}</p>
                        </li>
                      </Link>
                    );
                  });
                }
              })}
        </ul>
      </div>
    </ProductMenu>
  );
};

export default Mug;
