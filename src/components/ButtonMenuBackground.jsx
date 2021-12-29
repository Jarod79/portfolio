import Burger from "../img/burger.png";

const ButtonMenuBackground = ({
  change,
  setChange,
  burgerButton,
  setBurgerButton,
}) => {
  return (
    <div className="footer">
      <button
        onClick={() => setChange(!change)}
        className={
          change ? "footer_button_background" : "footer_button_background_b"
        }
      >
        {!change ? <p>Bureau</p> : <p>Espace</p>}
      </button>
      <button
        className={change ? "footer_button_phone" : "footer_button_phone_b"}
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
