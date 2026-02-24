const UserMessage = () => {
  return (
    <div className="flex flex-col max-w-[55%] self-start mr-2">
      {/* Message */}
      <div className="bg-gray-300  min-h-10 p-2 rounded-lg font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        suscipit quos in impedit, inventore ipsum modi a delectus totam est,
      </div>
      {/* Message Time */}
      <p className="text-sm text-gray-400 mt-2">Today, 12:01 pm</p>
    </div>
  );
};

export default UserMessage;
