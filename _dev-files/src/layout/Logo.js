const Logo = ({ scrollMode }) => {
  return (
    <div className="logo-container">
      <a href="/">
        <h2 className="logo">
          Portfo
          <span
            className="color-emphased"
            style={{ color: scrollMode ? "white" : "crimson" }}
          >
            lio.
          </span>
        </h2>
      </a>
    </div>
  );
};

export default Logo;
