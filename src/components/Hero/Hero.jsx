import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.style";

const palete = {
  success: {
    background: "#03ad03",
    color: "#fffff",
  },
  danger: {
    background: "#ad0303",
    color: "#fffff",
  },
};

const Hero = ({ color, title, subtitle }) => {
  return (
    <S.Hero style={palete[color]}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </S.Hero>
  );
};

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["success", "danger"]),
};

export default Hero;
