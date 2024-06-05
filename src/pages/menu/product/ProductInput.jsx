import { useState } from "react";
import { ProductForm } from "./ProductStyle";
import data from "../../../assets/api/productData";

const ProductInput = ({ setIsCheckCategory, isCheckCategory }) => {
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
                <input
                  type="checkbox"
                  id="chk"
                  name="all"
                  value="all"
                  checked={isCheckCategory.all}
                  onChange={(e) => {
                    setIsCheckCategory({
                      bread: false,
                      cake: false,
                      sandwich: false,
                      soup: false,
                      fruit: false,
                      snack: false,
                      icecream: false,
                      [e.target.name]: e.target.checked,
                    });
                  }}
                />
                <label htmlFor="chk">전체 상품보기</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="mug"
                  id="chk"
                  value="mug"
                  checked={isCheckCategory.mug}
                  onChange={(e) => {
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    });
                  }}
                />
                <label htmlFor="chk">머그</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="glass"
                  value="glass"
                  checked={isCheckCategory.glass}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk">글라스</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="plastic"
                  value="plastic"
                  checked={isCheckCategory.plastic}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk">플라스틱 텀블러</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="stainless"
                  value="stainless"
                  checked={isCheckCategory.stainless}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk">스테인리스 텀블러</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="flask"
                  value="flask"
                  checked={isCheckCategory.flask}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk">보온병</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="accessory"
                  value="accessory"
                  checked={isCheckCategory.accessory}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="">액세서리</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="setproduct"
                  value="setproduct"
                  checked={isCheckCategory.setproduct}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk">선물세트</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="tea"
                  value="tea"
                  checked={isCheckCategory.tea}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
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
