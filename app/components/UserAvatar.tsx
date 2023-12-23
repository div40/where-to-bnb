"use client";

import Image from "next/image";
interface UserAvatarProps {
  src: string | null | undefined;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt="avatar"
      className="rounded-full bg-neutral-100 p-[4px]"
      height={30}
      width={30}
    />
  );
};

export default UserAvatar;
