import { MdLocalLibrary } from "react-icons/md";
import QuickLink from "./QuickLink";
import { IoSchoolSharp, IoStorefrontSharp } from "react-icons/io5";
import { RiPoliceBadgeFill } from "react-icons/ri";
import {
  FaBook,
  FaHandsHelping,
  FaHome,
  FaInfoCircle,
  FaUserFriends,
} from "react-icons/fa";
import { PiExamFill, PiStudentFill } from "react-icons/pi";
import { SiTestcafe } from "react-icons/si";

const QuickLinks = () => {
  return (
    <div className="w-full place-items-center text-gray-300 grid grid-cols-3 grid-rows-2 gap-y-4 h-full lg:grid-rows-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-y-8">
      <QuickLink quickLinkText="Bookstore" Icon={IoStorefrontSharp} />
      <QuickLink quickLinkText="Library" Icon={MdLocalLibrary} />
      <QuickLink quickLinkText="Police" Icon={RiPoliceBadgeFill} />
      <QuickLink quickLinkText="GED Testing" Icon={FaBook} />
      <QuickLink quickLinkText="Student Center" Icon={PiStudentFill} />
      <QuickLink quickLinkText="Student Lounge" Icon={FaUserFriends} />

      {/* Only visible on lg screens */}
      <div className="hidden lg:block">
        <QuickLink quickLinkText="Academic Affairs" Icon={IoSchoolSharp} />
      </div>
      <div className="hidden lg:block">
        <QuickLink quickLinkText="GED Testing" Icon={SiTestcafe} />
      </div>
      <div className="hidden lg:block">
        <QuickLink quickLinkText="Adult Education" Icon={FaHandsHelping} />
      </div>
      <div className="hidden lg:block">
        <QuickLink quickLinkText="Assessment Center" Icon={PiExamFill} />
      </div>
      <div className="hidden lg:block">
        <QuickLink quickLinkText="Recruitment" Icon={FaInfoCircle} />
      </div>
      <div className="hidden lg:block">
        <QuickLink quickLinkText="One Stop" Icon={FaHome} />
      </div>
    </div>
  );
};

export default QuickLinks;
