import SearchBar from "./SearchBar";
import TopRecruiter from "./TopRecruiter";

const Header = () => {
  return (
    <div className="w-screen h-auto mt-28 flex items-center justify-center">
      {" "}
      <div className="flex flex-col items-center text-center mt-2 space-y-14">
        <div className="space-y-3">
          <div className="text-5xl uppercase font-extrabold text-[#313866]">
            Ace Your Campus Interview
          </div>
          <div variant="h4" className="text-xl text-[#313866]">
            Find <span className="font-bold">Bharati Vidhyapeeth's</span>{" "}
            exclusive interview experiences
          </div>
        </div>
        <SearchBar />
        <TopRecruiter />
      </div>
    </div>
  );
};

export default Header;
