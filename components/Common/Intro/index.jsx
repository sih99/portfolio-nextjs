import Link from "next/link";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Tools from "./Tools";
import Skills from "./Skills";
import Image from "next/image";
import { NAME, DESIGNATION, SOCIAL_LINKS } from "../../../constants/constants";
import Yuta from "../../../public/images/yuta-okkotsu.jpeg";

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className="headerr z-50 absolute  backdrop-blur-sm inset-y-0 h-40 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-2">
        <Image className="w-[100px] h-[100px] rounded-full" src={Yuta} alt="profile picture" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-Gray900 text-base font-bold break-normal">{NAME}</span>
          <span className="text-sm text-Gray700 text-center">{DESIGNATION}</span>
        </div>
      </div>

      {/* middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-40 top-48 space-y-6 divide-y divide-Gray900 overflow-x-hidden no-scrollbar px-4">
        <Location />
        {/* <Languages /> */}
        {/* <Skills /> */}
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="">
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer" className="">
          <FaTwitter />
        </Link>
        <Link href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="">
          <FaFacebook />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
