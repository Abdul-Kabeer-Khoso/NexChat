const InputField = ({ inputType, inputPlaceholder }) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="w-[95%] py-2 px-3 border border-gray-300 rounded-2xl my-3"
    />
  );
};

export default InputField;
