import "../../../globals.css";
import React from "react";
import styles from "../../../page.module.css";
import {
  MobilesMenu,
  MobilesLink,
  MobilesList,
  MobilesClose,
} from "./MobileMenu.styles";
import { Link } from "react-scroll";

type NavbarSection =
  | "about"
  | "service"
  | "portfolio"
  | "plans"
  | "contact"
  | null;

type Props = {
  setIsActive: (value: React.SetStateAction<boolean>) => void;
};

const MobileMenu: React.FC<Props> = ({ setIsActive }) => {
  const handleclick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setIsActive(false);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  const [activeSection, setActiveSection] = React.useState<NavbarSection>(null);
  const handleSetActive = (to: string) => {
    setActiveSection(to as NavbarSection);
  };

  const handleSetInactive = () => {
    setActiveSection(null);
  };

  return (
    <MobilesMenu>
      <MobilesList>
        <Link
          href=""
          to="about"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={handleLinkClick}
          className={activeSection === "about" ? styles.active : ""}
          onSetActive={() => handleSetActive("about")}
          onSetInactive={handleSetInactive}
        >
          <MobilesLink>About</MobilesLink>
        </Link>

        <Link
          href=""
          to="service"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={handleLinkClick}
          className={activeSection === "service" ? styles.active : ""}
          onSetActive={() => handleSetActive("service")}
          onSetInactive={handleSetInactive}
        >
          <MobilesLink>Solutions</MobilesLink>
        </Link>

        <Link
          href=""
          to="portfolio"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={handleLinkClick}
          className={activeSection === "portfolio" ? styles.active : ""}
          onSetActive={() => handleSetActive("portfolio")}
          onSetInactive={handleSetInactive}
        >
          <MobilesLink>Portfolio</MobilesLink>
        </Link>

        <Link
          href=""
          to="plans"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={handleLinkClick}
          className={activeSection === "plans" ? styles.active : ""}
          onSetActive={() => handleSetActive("plans")}
          onSetInactive={handleSetInactive}
        >
          <MobilesLink>Plans</MobilesLink>
        </Link>

        <Link
          href=""
          to="contact"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={handleLinkClick}
          className={activeSection === "contact" ? styles.active : ""}
          onSetActive={() => handleSetActive("contact")}
          onSetInactive={handleSetInactive}
        >
          <MobilesLink>Contact</MobilesLink>
        </Link>
      </MobilesList>

      <MobilesClose onClick={(e) => handleclick(e)} id="nav-close">
        <i className="ri-close-line"></i>
      </MobilesClose>
    </MobilesMenu>
  );
};

export default MobileMenu;
