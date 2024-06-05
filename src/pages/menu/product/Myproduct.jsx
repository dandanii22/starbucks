import { ProductChoice } from "./ProductStyle";
import data from "../../../assets/api/productData";
import { useParams } from "react-router-dom";

const Myproduct = ({ setContet, content }) => {
  const { productID, category } = useParams();

  const productData = data.filter((item) => {
    return item.category === category;
  });

  const dataproduct = productData.map((item2) => item2.data).flat();
  const thisProduct = dataproduct.find(
    (item3) => item3.id === Number(productID)
  );

  console.log("thisProduct", thisProduct);
  const imgData = productData[0].data.map((data1) => data1.imgurl);

  return (
    <ProductChoice>
      <div className="left">
        <img src={thisProduct.imgurl}></img>
        <div className="myselect">
          <h3>{thisProduct.title}</h3>
        </div>
      </div>
      <div className="btnwrap">
        <button>등록</button>
        <button onClick={() => setContet(!content)}>취소</button>
      </div>
    </ProductChoice>
  );
};

export default Myproduct;
