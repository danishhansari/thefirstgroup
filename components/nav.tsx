import { Button } from "./ui/button";

export const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-12 py-4">
        <div className="logo">
          <img
            src={
              "https://prodtfgendpoint.azureedge.net/media/5654363/tfg-logo-black-trimmed-new-2024.png?v=52"
            }
            className="w-28 h-11"
            alt="fkjd"
          />
        </div>
        <ul className="flex items-center gap-6 text-[#818181] text-sm">
          <li>Become a owner</li>
          <li>Our Properties</li>
          <li>Locations</li>
          <li>About Us</li>
        </ul>
        <div>
          <Button
            variant={"secondary"}
            className="text-[#2D2926] bg-[#2D29260A] border-[#DBDBDB] border rounded-2xl py-4 px-3.5"
          >
            Schedule a Call
          </Button>
        </div>
      </nav>
    </>
  );
};
