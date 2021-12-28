const Footer = ({ change, setChange }) => {
  return (
    <div className={change ? "footer" : "footer_b"}>
      <button onClick={() => setChange(!change)}>
        {!change ? "Bureau" : "Espace"}
      </button>
    </div>
  );
};

export default Footer;
