import Image from "next/image";

const AvatarPerson = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src="/hero.png" 
        width={950} 
        height={980} 
        alt="Avatar Profile" 
        className="translate-z-0 w-full h-full" 
      />
    </div>
  );
};

export default AvatarPerson;
