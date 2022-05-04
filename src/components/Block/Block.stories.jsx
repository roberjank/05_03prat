import React from "react";
import Block from "./Block";

export default {
  title: "Block",
  component: Block,
};

export const Primary = () => <Block>Some text</Block>;
export const Success = () => <Block>Some more text</Block>;
export const Danger = () => <Block>All of this are evenly spaced</Block>;
