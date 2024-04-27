import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
const NavBar = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to={"/"} className="text-[#313866] text-2xl font-bold">
            Inteview-Ex
          </Link>
          <div className="flex space-x-20 text-xl items-center">
            <Link to={"/"} className="text-[#313866]">
              Home
            </Link>
            <Link
              to={"/companydetails"}
              className="text-green-800 hover:text-green-400"
            >
              Hiring *
            </Link>
            <Dropdown />
            <button className="text-white bg-[#313866] text-md  p-2 rounded-md">
              Sign Up{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
