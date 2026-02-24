import { UserRound } from "lucide-react";

const UserProfileIcon = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* User Profile Icon or Image */}
      <div
        className={`${props.w} h-auto aspect-square rounded-full ${props.bgColor} flex flex-col justify-center items-center`}
      >
        <UserRound size="50%" />
      </div>
    </div>
  );
};

export default UserProfileIcon;
