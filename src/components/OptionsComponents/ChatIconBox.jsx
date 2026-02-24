import { MessageCircle } from "lucide-react";
import { useState } from "react";
const ChatIconBox = () => {
  const [chatActive, SetChatActive] = useState(false);
  return (
    <div
      className={`w-[4vw] h-auto aspect-square rounded-full ${chatActive ? "bg-gray-300" : "bg-white"} shadow-2xl relative flex justify-center items-center group cursor-pointer hover:bg-gray-300`}
      onClick={() => SetChatActive(!chatActive)}
    >
      <div className="absolute px-2 py-1 bg-[#161059] rounded-md text-sm text-white left-17 top-4 hidden group-hover:block">
        Chats
      </div>
      <MessageCircle />
    </div>
  );
};

export default ChatIconBox;
