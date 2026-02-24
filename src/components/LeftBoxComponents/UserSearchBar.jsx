import { Search } from "lucide-react";

const UserSearchBar = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-9 pr-3 py-2 rounded-4xl bg-gray-300 focus:outline-none"
      ></input>
      <Search size="1.7vw" className="absolute top-2 left-2 text-gray-700" />
    </div>
  );
};

export default UserSearchBar;
