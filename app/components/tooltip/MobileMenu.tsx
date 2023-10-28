import "../../globals.css";
import React from "react";
import { navbar } from "../../models/NavModels";
import { styled } from "@mui/system";

type Props = {
  setIsActive: (value: React.SetStateAction<boolean>) => void;
};
const MobileMenu: React.FC<Props> = ({ setIsActive }) => {
  const handleclick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setIsActive(false);
  };
  return (
    <MobilesMenu>
      <MobilesList>
        {navbar.map((navbar, index) => (
          <MobilesLink key={index} href={navbar.link}>
            {navbar.title}
          </MobilesLink>
        ))}
      </MobilesList>
      <MobilesClose onClick={(e) => handleclick(e)} id="nav-close">
        <i className="ri-close-line"></i>
      </MobilesClose>
    </MobilesMenu>
  );
};

export default MobileMenu;

const MobilesMenu = styled("div")`
  @media screen and (max-width: 1023px) {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--first-color);

    width: 100%;
    height: 100%;
    padding: 6rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    transition: right 0.4s;
  }
`;

const MobilesList = styled("ul")`
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  list-style: none;
  color: var(--second-color);
`;

const MobilesLink = styled("a")`
  color: var(--second-color);
  font-weight: 550;
  font-size: 1.3rem;
  transition: color 0.4s;
  text-decoration: none;
  border-bottom: 1px solid rgba(211, 211, 211, 0.252);
`;

const MobilesClose = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: var(--h3-font-size);
  cursor: pointer;
  color: var(--first-color);
  background-color: var(--second-color);
  border-radius: 0.2rem;

  position: absolute;
  top: 0.75rem;
  right: 1.5rem;

  @media screen and (min-width: 1023px) {
    display: none;
  }
`;
