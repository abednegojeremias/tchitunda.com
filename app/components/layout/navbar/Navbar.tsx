"use client";
import "../../../globals.css";
import React from "react";
import styles from "../../../page.module.css";
import MobileMenu from "../../tooltip/mobilemenu/MobileMenu";
import { Link } from "react-scroll";
import { homelink } from "../../../models/HomeLinkModels";

import {
  Header,
  Nav,
  NavLogo,
  Image,
  NavMenu,
  NavList,
  NavItem,
  NavToggle,
} from "./Navbar.styles";

type NavbarSection =
  | "about"
  | "service"
  | "portfolio"
  | "plans"
  | "contact"
  | null;

export default function Navbar() {
  const [showMobile, setShowMobile] = React.useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setShowMobile(!showMobile);
  };

  const [activeSection, setActiveSection] = React.useState<NavbarSection>(null);
  const handleSetActive = (to: string) => {
    setActiveSection(to as NavbarSection);
  };

  const handleSetInactive = () => {
    setActiveSection(null);
  };

  return (
    <Header>
      <Nav className={styles.container}>
        {homelink.map((homelink, index) => (
          <NavLogo key={index} href={homelink.link}>
            <Image src="/static/icon-navbar.svg" />
          </NavLogo>
        ))}
        <NavMenu>
          <NavList>
            <Link
              href=""
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className={activeSection === "about" ? styles.active : ""}
              onSetActive={() => handleSetActive("about")}
              onSetInactive={handleSetInactive}
            >
              <NavItem>About</NavItem>
            </Link>

            <Link
              href=""
              to="service"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className={activeSection === "service" ? styles.active : ""}
              onSetActive={() => handleSetActive("service")}
              onSetInactive={handleSetInactive}
            >
              <NavItem>Solutions</NavItem>
            </Link>

            <Link
              href=""
              to="portfolio"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className={activeSection === "portfolio" ? styles.active : ""}
              onSetActive={() => handleSetActive("portfolio")}
              onSetInactive={handleSetInactive}
            >
              <NavItem>Portfolio</NavItem>
            </Link>

            <Link
              href=""
              to="plans"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className={activeSection === "plans" ? styles.active : ""}
              onSetActive={() => handleSetActive("plans")}
              onSetInactive={handleSetInactive}
            >
              <NavItem>Plans</NavItem>
            </Link>

            <Link
              href=""
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className={activeSection === "contact" ? styles.active : ""}
              onSetActive={() => handleSetActive("contact")}
              onSetInactive={handleSetInactive}
            >
              <NavItem>Contact</NavItem>
            </Link>
          </NavList>
        </NavMenu>
        <NavToggle onClick={(event) => handleClick(event)} id="nav-toggles">
          <i className="ri-menu-fill"></i>
        </NavToggle>
        {showMobile && <MobileMenu setIsActive={setShowMobile} />}
      </Nav>
    </Header>
  );
}
