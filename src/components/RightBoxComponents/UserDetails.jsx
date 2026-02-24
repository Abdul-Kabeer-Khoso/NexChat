import UserProfileIcon from "../UserProfileIcon";
import { EllipsisVertical } from "lucide-react";

const UserDetails = () => {
  return (
    <div className="w-full p-2 pb-3 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center gap-3">
        {/* User Profile Image */}
        <UserProfileIcon w="w-[3.5vw]" bgColor="bg-white" />

        {/* User Name and last seen */}
        <div>
          <h2 className="text-lg font-bold ">Sameer</h2>
          <p className="text-sm text-gray-400 font-semibold">
            Online . Last seen 12:45 pm
          </p>
        </div>
      </div>

      {/* 3 dot option */}
      <div className="cursor-pointer p-2 rounded-full hover:bg-gray-300">
        <EllipsisVertical />
      </div>
    </div>
  );
};

export default UserDetails;
