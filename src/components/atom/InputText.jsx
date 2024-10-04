export const InputText = ({
  type = "text",
  placeholder,
  className,
  ...others
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered w-full max-w-xs ${className}`}
      {...others}
    />
  );
};
