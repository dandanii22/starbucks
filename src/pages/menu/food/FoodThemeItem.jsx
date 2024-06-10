const FoodThemeItem = ({ item }) => {
  const { imgurl, title, kor, id } = item;
  return (
    <li>
      <div className="lidiv">
        <img src={imgurl} alt={title} />
      </div>

      <span>{kor}</span>
    </li>
  );
};

export default FoodThemeItem;
