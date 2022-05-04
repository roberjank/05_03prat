import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button>Save and continue</Button>;
export const Success = () => <Button>Save changes</Button>;
export const Danger = () => <Button>Cancel</Button>;
