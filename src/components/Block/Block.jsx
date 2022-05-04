import React from "react";
import PropTypes from "prop-types";
import * as S from "./Block.style";

const palete = {
  primary: {
    background: "#0b178033",
    color: "#fffff",
  },
  success: {
    background: "#1f981f",
    color: "#fffff",
  },
  danger: {
    background: "#ce1212",
    color: "#fffff",
  },
};

const Block = ({ color, children }) => {
  return <S.Block style={palete[color]}>{children}</S.Block>;
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger"]),
};

Block.defaultProps = {
  color: "primary",
};

export default Block;
