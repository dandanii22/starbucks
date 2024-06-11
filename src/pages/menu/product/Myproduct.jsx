import { ProductChoice } from "./ProductStyle";
import data from "../../../assets/api/productData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMymenus } from "../../../store/modules/authSlice";
import { useState } from "react";

const Myproduct = ({ setContet, content }) => {
  const dispatch = useDispatch();
  const { productID, category } = useParams();
  const { user } = useSelector((state) => state.authR);
  const { myMenus } = user;
  const [productOption, setProductOption] = useState({});

  const productData = data.filter((item) => {
    return item.category === category;
  });

  const dataproduct = productData.map((item2) => item2.data).flat();
  const thisProduct = dataproduct.find(
    (item3) => item3.id === Number(productID)
  );

  const onChangeOption = () => {
    setProductOption({
      kor: thisProduct.title,
    });
  };

  const onSaveBtn = (e) => {
    e.preventDefault();
    dispatch(
      addMymenus({
        id: thisProduct.id,
        goodsNo: productID,
        cate: 3,
        kor: thisProduct.kor,
        date: "2024-06-10",
        isChk: false,
        imgurl: thisProduct.imgurl,
      })
    );
  };
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
        <button onClick={(e) => onSaveBtn(e)}>등록</button>
        <button onClick={() => setContet(!content)}>취소</button>
      </div>
    </ProductChoice>
  );
};

export default Myproduct;
