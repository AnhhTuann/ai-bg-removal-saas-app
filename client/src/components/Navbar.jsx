import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
      </Link>
      <button className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full">
        Get Started
        <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="icon arrow" />
      </button>
    </div>
  );
};

export default Navbar;
