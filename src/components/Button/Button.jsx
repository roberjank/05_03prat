import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

const palete = {
  primary: {
    background: "#1223e333",
    color: "#fffff",
  },
  success: {
    background: "#1f981f",
    color: "#fffff",
  },
  danger: {
    background: " #ce1212",
    color: "#fffff",
  },
};

const Button = ({ type, color, children }) => {
  return (
    <S.Button style={palete[color]} type={type}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger"]),
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  type: "button",
  color: "primary",
};

export default Button;
