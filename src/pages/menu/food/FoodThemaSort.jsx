import { FoodSortList } from "./FoodStyle";

const FoodThemaSort = ({ item, setCurrentThema, currentThema }) => {
  const { thema, imgurl } = item;
  return (
    <FoodSortList
      onClick={(e) => {
        setCurrentThema(thema);
      }}
      className={currentThema === thema ? "on" : ""}
    >
      <button>
        <img src={imgurl} alt={thema} />
      </button>
    </FoodSortList>
  );
};

export default FoodThemaSort;
