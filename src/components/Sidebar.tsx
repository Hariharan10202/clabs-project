import React from "react";
import Header from "./Header";
import SidebarContent from "../Container/SidebarContent";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`w-full overflow-scroll h-full flex flex-col sm:w-[50%] md:w-[40%] bg-white fixed shadow-md right-0 top-0 transition-transform duration-300 ease-in-out transform  ${
        !isOpen ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <Header closeSidebar={closeSidebar} label="Saving segment" />
      <SidebarContent closeSidebar={closeSidebar} />
    </div>
  );
};

export default Sidebar;
