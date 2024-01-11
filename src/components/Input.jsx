import React, { useId } from "react";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
        {label && (
          <label htmlFor={`${id}`} className="inline-block mb-1 pl-1">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
