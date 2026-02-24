import { CircleDashed } from "lucide-react";
import { useState } from "react";
const StatusIconBox = () => {
  const [statusActive, SetStatusActive] = useState(false);
  return (
    <div
      className={`w-[4vw] h-auto aspect-square rounded-full shadow-2xl ${statusActive ? "bg-gray-300" : "bg-white"} relative flex justify-center items-center group cursor-pointer hover:bg-gray-300`}
      onClick={() => {
        SetStatusActive(!statusActive);
      }}
    >
      <CircleDashed />
      <div className="absolute px-2 py-1 bg-[#161059] rounded-md text-sm text-white left-17 top-4 hidden group-hover:block">
        Status
      </div>
    </div>
  );
};

export default StatusIconBox;
