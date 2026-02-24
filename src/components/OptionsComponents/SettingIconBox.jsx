import { Settings } from "lucide-react";
import { useState } from "react";
const SettingIconBox = () => {
  const [settingActive, SetSettingActive] = useState(false);

  return (
    <div
      className={`w-[4vw] h-auto aspect-square ${settingActive ? "bg-gray-300" : "bg-white"} rounded-full shadow-2xl relative flex justify-center items-center group cursor-pointer hover:bg-gray-300`}
      onClick={() => SetSettingActive(!settingActive)}
    >
      <Settings />
      <div className="absolute px-2 py-1 bg-[#161059] rounded-md text-sm text-white left-17 top-4 hidden group-hover:block">
        Settings
      </div>
    </div>
  );
};

export default SettingIconBox;
