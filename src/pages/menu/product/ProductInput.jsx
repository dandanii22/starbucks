import { useState } from "react";
import { ProductForm } from "./ProductStyle";
import data from "../../../assets/api/productData";

const ProductInput = () => {
  const [showInput, setShowInput] = useState(true);

  return (
    <ProductForm>
      <div className="top">
        <h2>분류보기</h2>
        <p onClick={() => setShowInput(!showInput)}>
          <i className="xi-angle-up"></i>
        </p>
      </div>

      {showInput && (
        <>
          <div className="btn">
            <button>카테고리</button>
            <button>테마</button>
          </div>
          <div>
            <div className="checkbox">
              <p>
                <input type="checkbox" id="chk" name="all" value="all" />
                <label htmlFor="chk">전체 상품보기</label>
              </p>
              <p>
                <input type="checkbox" name="bread" id="chk" value="bread" />
                <label htmlFor="chk">머그</label>
              </p>
              <p>
                <input type="checkbox" id="chk" name="cake" value="cake" />
                <label htmlFor="chk">글라스</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="sandwich"
                  value="sandwich"
                />
                <label htmlFor="chk">플라스틱 텀블러</label>
              </p>
              <p>
                <input type="checkbox" id="chk" name="soup" value="soup" />
                <label htmlFor="chk">스테인리스 텀블러</label>
              </p>
              <p>
                <input type="checkbox" id="chk" name="friut" value="friut" />
                <label htmlFor="chk">보온병</label>
              </p>
              <p>
                <input type="checkbox" id="chk" name="snack" value="snack" />
                <label htmlFor="">액세서리</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="icecream"
                  value="icecream"
                />
                <label htmlFor="chk">선물세트</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="icecream"
                  value="icecream"
                />
                <label htmlFor="chk">패키지 티</label>
              </p>
            </div>
          </div>
        </>
      )}
    </ProductForm>
  );
};

export default ProductInput;
