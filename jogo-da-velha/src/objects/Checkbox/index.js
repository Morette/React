import React from "react";
import "./styles.css";

import Label from "../Label";
import Input from "../Input";

const Checkbox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input id={id} content={content} value={value} type="checkbox" />
    <Label htmlFor={id} content={content} />
  </>
)

export default Checkbox;