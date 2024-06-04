const DropDown = ({ showNew, setShowNew }) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          name="new"
          onChange={(e) => {
            console.log(e.target.checked);
            setShowNew({
              ...showNew,
              [e.target.name]: e.target.checked,
            });
          }}
        />
        <img src="../../public/images/food/mark01.png" />
        신규출시된메뉴
      </li>
    </>
  );
};

export default DropDown;