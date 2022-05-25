import propTypes from "prop-types";

const Button = ({ label, backgroundColor = "red", size = "md", handleClick }) => {
  let scale = 1;
  
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    margin: "1rem"
  };
  return (
    <button onClick={handleClick} style={style} data-testid="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: propTypes.string,
  backgroundColor: propTypes.string,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  handleClick: propTypes.func,
};

export default Button;
