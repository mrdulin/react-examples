import React from "react";
import * as PTs from "prop-types";

interface CustomFormProps {
  value?: { phone: string };
}
const CustomForm = React.forwardRef<HTMLFormElement, CustomFormProps>(
  ({ value = { phone: "" } }: CustomFormProps, ref) => {
    const { phone } = value;
    console.log(phone);
    return <form ref={ref}></form>;
  }
);

CustomForm.displayName = "CustomForm";
CustomForm.defaultProps = {
  value: { phone: "" },
};
CustomForm.propTypes = {
  value: PTs.exact({ phone: PTs.string.isRequired }),
};
