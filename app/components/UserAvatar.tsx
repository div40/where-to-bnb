"use client";

import Image from "next/image";

const UserAvatar = () => {
  return (
    <Image
      src="/placeholder.svg"
      alt="avatar"
      className="rounded-full bg-neutral-100 p-[4px]"
      height={30}
      width={30}
    />
  );
};

export default UserAvatar;
