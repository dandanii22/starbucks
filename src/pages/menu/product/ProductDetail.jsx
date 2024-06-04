import { Detail } from "./ProductStyle";
import logoimg from "../../../../public/images/logo2.png";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../assets/api/productData";

const ProductDetail = () => {
  const { productID, category } = useParams();
  const navigate = useNavigate();
  const onGo = () => {
    navigate(-1);
  };

  //카테고리만 추출
  const productData = data.filter((item) => {
    return item.category === category;
  });

  // data만 추출
  const dataproduct = productData.map((item2) => item2.data).flat();

  // productID 부여해 사이트 이동
  const thisProduct = dataproduct.find(
    (item3) => item3.id === Number(productID)
  );

  // imgurl만 추출
  const imgData = data[0].data.map((data1) => data1.imgurl);
  console.log("imgData", imgData);

  //랜덤추출
  const newarr = [];
  while (imgData.length > 5) {
    let movearr = imgData.splice(
      Math.floor(Math.random() * newarr.length),
      1
    )[0];
    newarr.push(movearr);
  }

  return (
    <Detail>
      <div className="main">
        <img
          src={thisProduct.imgurl}
          alt={thisProduct.title}
          className="mainimg"
        />

        <div className="text">
          <h2>{thisProduct.title}</h2>
          <p className="engname">{thisProduct.eng}</p>
          <p className="desc">{thisProduct.text}</p>
          <p className="btn">
            <button>
              나만의 푸드로 등록<i className="xi-heart-o"></i>
            </button>
            <button>장바구니 담기</button>
          </p>
        </div>
      </div>

      <div className="recommend">
        <div className="title">
          <img src={logoimg} alt="" />
          <h3>오늘의 추천 메뉴</h3>
        </div>
        <ul>
          {imgData.map(
            (data2, idx) =>
              idx < 5 && (
                <li>
                  <img src={data2} />
                </li>
              )
          )}
        </ul>
      </div>
      <div className="lastbtn">
        <button onClick={onGo}>목록으로 돌아가기</button>
      </div>
    </Detail>
  );
};

export default ProductDetail;