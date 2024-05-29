import { Outlet } from "react-router-dom";
import SubVisual from "./SubVisual";

const LayoutSub = () => {
  return (
    <div className="wrap">
      <SubVisual />
      <Outlet />
    </div>
  );
};

export default LayoutSub;
