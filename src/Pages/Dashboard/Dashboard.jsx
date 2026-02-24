import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[#f2f5f3] flex justify-center items-center">
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default Dashboard;
