import SignIn from "./SignIn";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen bg-blue-300 flex justify-center items-center">
      <div className="w-[29%] h-[70%] p-5 rounded-2xl bg-white">
        {/* <Login /> */}
        <SignIn />
      </div>
    </div>
  );
};

export default AuthLayout;
