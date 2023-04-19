import React from "react";
import { Checkbox, Form, FormGroup } from "@bigcommerce/big-design";
import { useState } from "react";

const Button = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    window.location.href = "https://www.google.com";
    // alert("You will be directed to the BNPL React Application!");
  };

  return (
    <Form>
      <FormGroup>
        <Checkbox
          checked={checked}
          label={
            checked ? "Selected BNPL as a Payment gateway" : "BNPL Stratesfy"
          }
          onChange={handleChange}
        />
      </FormGroup>
    </Form>
  );
};

export default Button;
