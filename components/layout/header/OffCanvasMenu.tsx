"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import svgLogo from "@/public/images/logo/logo-dark.svg";

const OffCanvasMenu = ({ toggleMenu, handleToggleMenu }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <div
      id="targetElement"
      className={(toggleMenu ? " " : " sidebar__hide") + " sidebar-area"}
    >
      <div className="sidebar__overlay"></div>
      <Link href="/" className="logo mb-40">
        <Image src={svgLogo} alt="WeddySoft logo" />
      </Link>
      <div className="sidebar__search mb-30">
        <input type="text" placeholder="Search..." />
        <i className="fa-regular fa-magnifying-glass"></i>
      </div>
      <div className="mobile-menu overflow-hidden">
        <nav className="mean-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a
                className={`drop ${isSubMenuButton("services")}`}
                onClick={() => handleSubmenu("services")}
              >
                Services
              </a>
              <ul className={`sub-menu ${isSubMenuOpen("services")}`}>
                <li>
                  <Link href="/service-solutions">IT Solutions</Link>
                </li>
                <li>
                  <Link href="/service">IT Services</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/case">Work</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="info pt-40">
        <li>
          <i className="fa-solid primary-color fa-location-dot"></i> Hyderabad
        </li>
        <li className="py-2">
          <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
          <Link href="tel:+919676758813">+91 9676758813</Link>
        </li>
        <li>
          <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
          <Link href="mailto:Jalil.mohammad@weddysoft.com">
            Jalil.mohammad@weddysoft.com
          </Link>
        </li>
      </ul>
      <button
        id="closeButton"
        className="text-white"
        onClick={() => handleToggleMenu(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default OffCanvasMenu;
