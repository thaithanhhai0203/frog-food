import { useEffect, useState } from "react";
import SubMenuContainer from "../SubMenuContainer/SubMenuContainer";
import { MenuItems, Items } from "../../Data";
import MenuCard from "../MenuCard/MenuCard";
import ItemCard from "../ItemCard/ItemCard";
import "./dishContainer.css";

const DishContainer = () => {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  useEffect(() => {
    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  // set main dish items filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };
  return (
    <div className="dishContainer">
      <div className="menuCard">
        <SubMenuContainer name={"Chúng tôi có bán"} />
      </div>
      <div className="rowContainer">
        {MenuItems &&
          MenuItems.map((data) => (
            <div key={data.id} onClick={() => setData(data.itemId)}>
              <MenuCard
                imgSrc={data.imgSrc}
                name={data.name}
                // eslint-disable-next-line eqeqeq
                isActive={data.id == "1" ? true : false}
              />
            </div>
          ))}
      </div>
      <div className="menuCard">
        <SubMenuContainer name={"Hôm nay bạn muốn ăn gì?"} />
      </div>
      {/* Dish item Container */}
      <div className="dishitemContainer">
        {isMainData &&
          isMainData.map((data) => (
            <ItemCard
              key={data.id}
              itemId={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
              price={data.price}
            />
          ))}
      </div>
    </div>
  );
};

export default DishContainer;
