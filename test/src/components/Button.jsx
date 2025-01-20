import { memo } from "react";

const Button = memo(({ onClick, children, ...otherProps }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <button onClick={onClick} {...otherProps}>
      {" "}
      {children}{" "}
    </button>
  );
});

export default Button;
