/* eslint-disable react/prop-types */
const Button = ({
  children,
  bgColor = "bg-blue-600",
  className = "",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className}  ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
