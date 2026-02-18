const InputField = ({ inputType, inputPlaceholder }) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="w-[95%] py-2 pl-10 pr-3 border border-gray-300 rounded-4xl my-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
    />
  );
};

export default InputField;
