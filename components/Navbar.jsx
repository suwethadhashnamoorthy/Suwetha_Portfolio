import Link from "next/link";
import {
  HiAcademicCap,
  HiHomeModern,
  HiMegaphone,
  HiMiniBriefcase,
  HiMiniCube,
  HiRocketLaunch,
} from "react-icons/hi2";
import { useRouter } from "next/router";

// Navigation Data
export const navigationData = [
  { name: "home", path: "/", icon: <HiHomeModern /> },
  { name: "about", path: "/about", icon: <HiAcademicCap /> },
  { name: "skills", path: "/skills", icon: <HiMiniCube /> },
  { name: "work", path: "/work", icon: <HiMiniBriefcase /> },
  // { name: "testimonials", path: "/testimonials", icon: <HiMegaphone /> },
  { name: "contact", path: "/contact", icon: <HiRocketLaunch /> },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-slate-200 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navigationData.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path ? "text-accent" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            <div className="hidden absolute pl-12 left-0 xl:group-hover:flex">
              <div className="bg-accent relative flex text-white items-center px-4 py-2 rounded-full">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
              </div>
            </div>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
