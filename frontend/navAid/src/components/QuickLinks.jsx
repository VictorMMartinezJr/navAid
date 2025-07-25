import { assets } from "../assets/assets";
import QuickLink from "./QuickLink";

const QuickLinks = () => {
  return (
    <div className=" w-full text-gray-300 grid grid-cols-3 grid-rows-2 gap-y-4">
      <QuickLink
        img={assets.bookstoreIcon}
        altText={"Bookstore logo"}
        quickLinkText="Bookstore"
      />
      <QuickLink
        img={assets.libraryIcon}
        altText={"Library logo"}
        quickLinkText="Library"
      />
      <QuickLink
        img={assets.policeIcon}
        altText={"campus police logo"}
        quickLinkText="Police"
      />
      <QuickLink
        img={assets.test}
        altText={"GED testing logo"}
        quickLinkText="GED Testing"
      />
      <QuickLink
        img={assets.studentCenter}
        altText={"Student center logo"}
        quickLinkText="Student Center"
      />
      <QuickLink
        img={assets.lounge}
        altText={"Student lounge logo"}
        quickLinkText="Student Lounge"
      />
    </div>
  );
};

export default QuickLinks;
