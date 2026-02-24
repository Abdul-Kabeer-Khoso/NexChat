import MyMessage from "./MyMessage";
import UserMessage from "./UserMessage";

const MessagesBox = () => {
  return (
    <div className="w-full h-[75%] p-2 my-2 flex flex-col gap-4 overflow-y-auto no-scrollbar border-b border-gray-300">
      <MyMessage />
      <UserMessage />
      <UserMessage />
      <UserMessage />
      <MyMessage />
      <UserMessage />
      <UserMessage />
      <MyMessage />
      <MyMessage />
    </div>
  );
};

export default MessagesBox;
