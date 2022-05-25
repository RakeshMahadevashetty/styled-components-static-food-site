import propTypes from "prop-types";

const Stack = ({ children, spacing = 2, direction = "row", wrap = false }) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
};

Stack.propTypes = {
  spacing: propTypes.number,
  wrap: propTypes.bool,
  direction: propTypes.oneOf(["row", "column"]),
};

export default Stack;
