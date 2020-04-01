import React from "react";
import { Button } from "reactstrap";

const SupportButton = ({ children, props }) => {
  return <Button {...props}>{children}</Button>;
};

export default SupportButton;
