import InputField from "../../components/InputField";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl text-center font-extrabold mt-3 mb-6">
        Create an account
      </h2>
      <InputField inputType="text" inputPlaceholder="Full name" />
      <InputField inputType="email" inputPlaceholder="Email" />
      <InputField inputType="password" inputPlaceholder="Password" />
      <button className="w-[95%] p-2 bg-blue-400 rounded-xl mt-5 hover:cursor-pointer ">
        SignIn
      </button>
      <button className="w-[95%] p-2  border border-gray-300 rounded-xl mt-5 flex justify-center items-center hover:cursor-pointer">
        <img src="../public/Google Icon.webp" width="7%" className="mr-4" />{" "}
        Sign in with Google
      </button>
      <p className="my-3 ">
        Already have an account?{" "}
        <span className="text-blue-800 font-semibold hover:cursor-pointer hover:underline">
          Login
        </span>
      </p>
    </div>
  );
};

export default SignIn;
