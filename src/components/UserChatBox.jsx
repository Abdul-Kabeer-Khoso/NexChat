import UserProfileIcon from "./UserProfileIcon";

const UserChatBox = () => {
  return (
    <div className="w-full h-18 bg-white shadow-md px-3 py-5 rounded-2xl flex justify-between items-center">
      <UserProfileIcon w="w-[2.8vw]" bgColor="bg-gray-200" />
      {/* User name and recent message */}
      <div className="w-[60%] ml-3 flex flex-col justify-start items-start">
        {/* UserName */}
        <h2 className="font-semibold text-[15px]">Abdul Kabeer</h2>
        {/* Recent Message */}
        <p className="text-gray-500 text-[14px]">Where are you?</p>
      </div>

      {/* Time and Number of Messages */}
      <div className="w-[15%] flex flex-col justify-start items-center">
        {/* Time */}
        <p className="text-[12px] text-gray-400 mb-1 ">10:35</p>
        {/* Number of notification */}
        <div className="w-[1.4vw] h-auto aspect-square bg-amber-600 text-[12px] text-white rounded-full flex justify-center items-center">
          6
        </div>
      </div>
    </div>
  );
};

export default UserChatBox;
