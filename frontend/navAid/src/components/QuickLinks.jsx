import { assets } from "../assets/assets";
import QuickLink from "./QuickLink";

const QuickLinks = () => {
  return (
    <div className=" w-full text-gray-300 flex justify-around items-center">
      <QuickLink
        img={assets.onestopIcon}
        altText={"One stop logo"}
        quickLinkText="One Stop"
      />
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
        altText={"Police logo"}
        quickLinkText="Campus Police"
      />
    </div>
  );
};

export default QuickLinks;
