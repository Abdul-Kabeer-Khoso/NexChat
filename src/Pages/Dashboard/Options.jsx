import ChatIconBox from "../../components/OptionsComponents/ChatIconBox";
import UserProfileIcon from "../../components/UserProfileIcon";
import StatusIconBox from "../../components/OptionsComponents/StatusIconBox";
import SettingIconBox from "../../components/OptionsComponents/SettingIconBox";
import LogoutIconBox from "../../components/OptionsComponents/LogoutIconBox";

const Options = () => {
  return (
    <div className="w-[25%] p-5 py-8 h-screen border border-r-[#bebebe] border-t-0 border-b-0 border-l-0 flex flex-col justify-between items-center">
      <div>
        <UserProfileIcon w="w-[4vw]" bgColor="bg-white" />
        <h2 className="text-lg font-bold mt-2">Kabeer</h2>
      </div>
      <div className="h-[35%] flex flex-col justify-between items-center">
        <ChatIconBox />
        <StatusIconBox />
        <SettingIconBox />
      </div>
      <LogoutIconBox />
    </div>
  );
};

export default Options;
