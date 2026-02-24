import { Check } from "lucide-react";

const MyMessage = () => {
  return (
    <div className="flex flex-col self-end max-w-[50%]">
      {/* Message */}
      <div className="bg-[#161059]  min-h-10 p-2 rounded-lg  text-white ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        suscipit quos in impedit, inventore ipsum modi a delectus totam est,
        reiciendis harum sit voluptatum, quidem doloribus omnis minus sunt
        repudiandae!
      </div>
      {/* Message Time */}
      <div className="w-[41%] flex justify-between items-center self-end mt-2">
        <p className="text-sm text-gray-400">Yesterday, 01:32 pm</p>
        <Check size="1vw" />
      </div>
    </div>
  );
};

export default MyMessage;
