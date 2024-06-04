import { ProductMenu } from "./ProductStyle";
import data from "../../../assets/api/productData";
import { Link } from "react-router-dom";

const Glass = () => {
  return (
    <ProductMenu>
      <div className="inner">
        <h2>글래스</h2>
        <ul>
          {data?.map((item) => {
            if (item?.category === "글래스") {
              return item?.data?.map((item2) => {
                return (
                  <Link to={`${item.category}/${item2.id}`}>
                    <li key={item2.id} item2={item2}>
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

export default Glass;
