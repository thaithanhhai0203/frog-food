import { ChevronRightRounded } from "@mui/icons-material";
import "./menuCard.css";

const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <div className={`rowMenuCard ${isActive ? "active" : ""}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCard;
