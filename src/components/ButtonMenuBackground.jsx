import Burger from "../img/burger.png";

const ButtonMenuBackground = ({
  change,
  setChange,
  burgerButton,
  setBurgerButton,
}) => {
  return (
    <div className="container_button">
      <button
        onClick={() => setChange(!change)}
        className={
          change ? "content_button_background" : "content_button_background_b"
        }
      >
        {!change ? <p>Bureau</p> : <p>Espace</p>}
      </button>
      <button
        className={change ? "content_button_phone" : "content_button_phone_b"}
        onClick={() => setBurgerButton(!burgerButton)}
      >
        {burgerButton ? (
          <img src={Burger} alt="Burger bouton" />
        ) : (
          <p>&times;</p>
        )}
      </button>
    </div>
  );
};

export default ButtonMenuBackground;
