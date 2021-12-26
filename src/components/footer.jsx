import "./footer.css";

const Footer = ({ change, setChange }) => {
  return (
    <div className="footer">
      <button onClick={() => setChange(!change)}>
        {!change ? "Mode clair" : "Mode sombre"}
      </button>
    </div>
  );
};

export default Footer;
