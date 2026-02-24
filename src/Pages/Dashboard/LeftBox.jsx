import Options from "./Options";
import ChatBox from "./ChatBox";

const LeftBox = () => {
  return (
    <div className="w-[38%] h-screen border-r-2 border-green-900 flex">
      <Options />
      <ChatBox />
    </div>
  );
};

export default LeftBox;
