import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="absolute z-30 w-full flex items-center px-16 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex justify-center items-center py-8 gap-y-6">
            <Link href={"/"}>
              <Image src={"/logo.svg"} width={220} height={48} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
