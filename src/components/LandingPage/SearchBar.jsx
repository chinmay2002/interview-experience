import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className=" bg-white shadow-xl text-xl w-[50%] flex rounded-lg p-2 items-center border border-gray-500">
      <input
        type="text"
        className=" w-[100%] text-sm "
        placeholder="Search your company here"
      />
      <CiSearch className="text-3xl" />
    </div>
  );
};

export default SearchBar;
