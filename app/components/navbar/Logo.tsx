"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-2 cursor-pointer"
    >
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height={40}
        width={40}
        src="logo.svg"
      />
      <h1 className="text-primary text-lg font-semibold">WhereTo?</h1>
    </div>
  );
};

export default Logo;
