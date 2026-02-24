import { LogOut } from "lucide-react";

const LogoutIconBox = () => {
  return (
    <div className="w-[7vw] h-7 py-4 px-3 border border-gray-300  bg-white shadow-2xl rounded-md flex justify-around items-center cursor-pointer hover:bg-red-300 hover:border-none">
      <LogOut />
      <span className="ml-1">Logout</span>
    </div>
  );
};

export default LogoutIconBox;
