import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button color="primary">Save and continue</Button>;
export const Success = () => <Button color="success">Save changes</Button>;
export const Danger = () => <Button color="danger">Cancel</Button>;
