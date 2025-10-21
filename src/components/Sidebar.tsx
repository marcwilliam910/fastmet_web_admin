import {NavLink} from "react-router-dom";
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  TruckIcon as TruckIconSolid,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as HomeIconOutline,
  UserIcon as UserIconOutline,
  TruckIcon as TruckIconOutline,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const navItems = [
    {
      to: "/",
      label: "Home",
      iconSolid: HomeIconSolid,
      iconOutline: HomeIconOutline,
    },
    {
      to: "/drivers",
      label: "Drivers",
      iconSolid: UserIconSolid,
      iconOutline: UserIconOutline,
    },
    {
      to: "/vehicle-type",
      label: "Vehicle Type",
      iconSolid: TruckIconSolid,
      iconOutline: TruckIconOutline,
    },
  ];

  return (
    <aside className="h-screen w-64 gap-10 bg-secondary flex flex-col items-start py-6 fixed left-0 top-0 bottom-0 text-white">
      {/* Logo */}
      <div className="flex items-center justify-center pr-5 w-full gap-2">
        <img
          src={logo}
          alt="FastMet Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-semibold tracking-wider">FastMet</h1>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col w-full">
        {navItems.map(
          ({to, label, iconSolid: IconSolid, iconOutline: IconOutline}) => (
            <NavLink
              key={to}
              to={to}
              className={({isActive}) =>
                `flex items-center gap-3 px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-hover text-yellow-400"
                    : "text-white hover:bg-hover"
                }`
              }
            >
              {({isActive}) => (
                <>
                  {isActive ? (
                    <IconSolid className="w-6 h-6 text-primary" />
                  ) : (
                    <IconOutline className="w-6 h-6 text-primary" />
                  )}

                  <span className="text-base font-medium">{label}</span>
                </>
              )}
            </NavLink>
          )
        )}
      </nav>
    </aside>
  );
}
