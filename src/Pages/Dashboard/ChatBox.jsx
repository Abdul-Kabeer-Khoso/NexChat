import UserSearchBar from "../../components/LeftBoxComponents/UserSearchBar";
import AllChats from "./AllChats";

const ChatBox = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center px-5 py-8">
      <UserSearchBar />
      <AllChats />
    </div>
  );
};

export default ChatBox;
