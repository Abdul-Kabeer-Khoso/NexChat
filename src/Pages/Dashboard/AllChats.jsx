import UserChatBox from "../../components/UserChatBox";

const AllChats = () => {
  return (
    <div className="w-full h-auto mt-10 flex flex-col justify-start items-center gap-4">
      <UserChatBox />
      <UserChatBox />
      <UserChatBox />
      <UserChatBox />
      <UserChatBox />
      <UserChatBox />
    </div>
  );
};

export default AllChats;
