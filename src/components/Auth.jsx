import { useState } from "react";
import InputField from "./InputField";
import { LockKeyhole, Mail, UserRound } from "lucide-react";

const Auth = () => {
  const [account, setAccount] = useState("login");
  return (
    <div className="w-full h-screen bg-blue-300 flex justify-center items-center">
      <div className="w-[29%] h-[70%] p-5 rounded-2xl bg-white">
        {account == "login" ? (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center font-extrabold mt-3 mb-6">
              Welcome Back
            </h2>
            <div className="w-full flex justify-center relative mt-5">
              <Mail
                size="20px"
                className="absolute left-5 top-5.5 text-gray-500"
              />
              <InputField inputType="email" inputPlaceholder="Email" />
            </div>
            <div className="w-full flex justify-center relative">
              <LockKeyhole
                size="20px"
                className="absolute left-5 top-5.5 text-gray-500"
              />
              <InputField inputType="password" inputPlaceholder="Password" />
            </div>
            <button className="w-[95%] p-2 bg-blue-400 rounded-4xl font-semibold mt-9 hover:text-white  hover:cursor-pointer ">
              Login
            </button>
            <button className="w-[95%] p-2  border border-gray-300 rounded-4xl mt-6 flex justify-center items-center hover:cursor-pointer">
              <img src="/Google Icon.webp" width="7%" className="mr-4" />{" "}
              Continue with Google
            </button>
            <p className="mt-6 mb-3 ">
              Create a new account?{" "}
              <span
                className="text-blue-800 font-semibold hover:cursor-pointer hover:underline"
                onClick={() => setAccount("signin")}
              >
                SignIn
              </span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center font-extrabold mt-3 mb-6">
              Create an account
            </h2>
            <div className="w-full flex justify-center relative">
              <UserRound
                size="20px"
                className="absolute left-5 top-5.5 text-gray-500"
              />
              <InputField inputType="text" inputPlaceholder="Full name" />
            </div>
            <div className="w-full flex justify-center relative">
              <Mail
                size="20px"
                className="absolute left-5 top-5.5 text-gray-500"
              />
              <InputField inputType="email" inputPlaceholder="Email" />
            </div>
            <div className="w-full flex justify-center relative">
              <LockKeyhole
                size="20px"
                className="absolute left-5 top-5.5 text-gray-500"
              />
              <InputField inputType="password" inputPlaceholder="Password" />
            </div>
            <button className="w-[95%] p-2 bg-blue-400 rounded-4xl font-semibold mt-5 hover:text-white hover:cursor-pointer ">
              SignIn
            </button>
            <button className="w-[95%] p-2  border border-gray-300 rounded-4xl mt-5 flex justify-center items-center hover:cursor-pointer">
              <img src="/Google Icon.webp" width="7%" className="mr-4" /> Sign
              in with Google
            </button>
            <p className="my-3 ">
              Already have an account?{" "}
              <span
                className="text-blue-800 font-semibold hover:cursor-pointer hover:underline"
                onClick={() => setAccount("login")}
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
