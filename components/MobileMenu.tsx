  'use client'
  import { AlignLeft } from "lucide-react";
  import SideMenu from "./SideMenu";
  import { useState } from "react";


  const MobileMenu = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} aria-label="Open sidebar">
          <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
        </button>
        <div className="md:hidden">
          <SideMenu isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} />
        </div>
      </>
    );
  }
  export default MobileMenu