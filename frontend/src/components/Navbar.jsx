import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { BsSuitHeart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const currentUser = true;
  return (
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center ">
          {/* left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
               <HiBars3CenterLeft className="size-6 "/>
            </Link>

            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2">

               <IoIosSearch className="absolute inline-block left-3 inset-y-2"/>
               <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
            </div>
          </div>

          {/* right side */}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {
                currentUser ? <>
                <button>
                  <img src="" alt=""/>
                </button>
                </> :  <Link to="/login"><HiOutlineUser className="size-6 "/></Link>
              }
            </div>
           
             <button className="hidden sm:block">
                 <BsSuitHeart className="size-6"/>
             </button>

            <Link to="/cart" className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm">
               <FaShoppingCart className=""/>
               <span className="text-sm font-semibold">0</span>
            </Link>
          </div>
        </nav>
      </header>
  )
}

export default Navbar;