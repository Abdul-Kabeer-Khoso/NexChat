import { Mic, Paperclip, Send, Smile } from "lucide-react";

const InputBox = () => {
  return (
    <div className="w-full h-auto rounded-2xl flex justify-evenly items-center mt-2 relative">
      <input
        type="text"
        placeholder="Type your message here..."
        className="w-[88%] pl-10 pr-22 py-2 bg-gray-300 rounded-4xl focus:outline-none"
      ></input>
      <Paperclip
        size="1.5vw"
        className="absolute top-2.2 left-7.5 cursor-pointer"
      />
      <Mic size="1.5vw" className="absolute top-2.2 right-22 cursor-pointer" />
      <Smile
        size="1.5vw"
        className="absolute top-2.2 right-31 cursor-pointer"
      />
      {/* <Send  /> */}
      <div className="p-2 flex justify-center items-center bg-[#161059] rounded-full cursor-pointer">
        <Send color="#ffffff" />
      </div>
    </div>
  );
};

export default InputBox;
