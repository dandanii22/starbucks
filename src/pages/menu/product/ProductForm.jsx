import SubVisual from "../../../components/ProductSubVisual";
import Mug from "./Mug";
import Glass from "./Glass";
import data from "../../../assets/api/productData";
import { ProductWrap } from "./ProductStyle";
import { useState } from "react";
import Plastic from "./Plastic";
import Stainless from "./Stainless";
import Flask from "./Flask";
import Accessory from "./Accessory";
import Setproduct from "./Setproduct";
import ProductInput from "./ProductInput";
import ProductSelect from "./ProductSelect";
import Tea from "./Tea";
import CategoryProduct from "./CategoryProduct";
const ProductForm = () => {
  const [isCheckCategory, setIsCheckCategory] = useState({
    all: true,
    mug: false,
    accessory: false,
    flask: false,
    glass: false,
    plastic: false,
    setproduct: false,
    stainless: false,
    tea: false,
  });
  const [showNew, setShowNew] = useState({
    new: false,
    limited: false,
  });

  //data 추출
  const newproductData = data.map((item) => item.data).flat();

  //아이콘 있는 데이터만 추출
  const filterNewData = newproductData.filter((item2) => item2.icon === "new");

  const newData = (e) => {
    setShowNew(e.target.checked);
  };
  return (
    <ProductWrap>
      <SubVisual />
      <div className="inner">
        <ProductInput
          setIsCheckCategory={setIsCheckCategory}
          isCheckCategory={isCheckCategory}
        />
        <div className="productmenu">
          <div className="select">
            <ProductSelect showNew={showNew} setShowNew={setShowNew} />
          </div>

          <div className="product">
            {isCheckCategory.all ? (
              <>
                <CategoryProduct showNew={showNew} />
              </>
            ) : (
              <>
                {isCheckCategory.mug && <Mug showNew={showNew} />}
                {isCheckCategory.glass && <Glass showNew={showNew} />}
                {isCheckCategory.plastic && <Plastic showNew={showNew} />}
                {isCheckCategory.stainless && <Stainless showNew={showNew} />}
                {isCheckCategory.flask && <Flask showNew={showNew} />}
                {isCheckCategory.accessory && <Accessory showNew={showNew} />}
                {isCheckCategory.setproduct && <Setproduct showNew={showNew} />}
                {isCheckCategory.tea && <Tea showNew={showNew} />}
              </>
            )}
          </div>
        </div>
      </div>
    </ProductWrap>
  );
};

export default ProductForm;
