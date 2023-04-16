import React from "react";

function Button({ title, onClick, variant, disabled, fullWidth, type }) {
  let className = "bg-primary p-1 text-white cursor-pointer";

  if (fullWidth) {
    className += " w-full";
  }
  if (variant === "outlined") {
    className = className.replace(
      "bg-primary text-white",
      "border border-secondary"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;