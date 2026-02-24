import InputBox from "../../components/RightBoxComponents/InputBox";
import MessagesBox from "../../components/RightBoxComponents/MessagesBox";
import UserDetails from "../../components/RightBoxComponents/UserDetails";

const RightBox = () => {
  return (
    <div className="w-[65%] p-6 h-screen ">
      <div className="w-full h-full p-4 rounded-2xl bg-white border border-black flex flex-col justify-start items-center">
        <UserDetails />
        <MessagesBox />
        <InputBox />
      </div>
    </div>
  );
};

export default RightBox;
