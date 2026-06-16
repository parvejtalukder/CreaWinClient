import React from "react";
import { NavLink } from "react-router";
import { GoHome } from "react-icons/go";
import { BiObjectsHorizontalLeft } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";

const navItems = [
  { name: "Home", path: "/", icon: <GoHome></GoHome> },
  { name: "All Contests", path: "/all-contests", icon: <BiObjectsHorizontalLeft></BiObjectsHorizontalLeft> },
  { name: "Leaderboard", path: "/leaderboard", icon: <MdOutlineLeaderboard></MdOutlineLeaderboard> },
];

const MobileMenu = () => {

  return (
    <div className="dock bg-secondary text-neutral-content md:hidden fixed bottom-0 left-0 w-full z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center transition-colors duration-200 ${
              isActive ? "text-secondary-content animate-pulse" : "text-base-content hover:text-primary"
            }`
          }
        >
          <span className="text-lg">{item.icon}</span>
          <span className="dock-label text-xs font-bold">
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;