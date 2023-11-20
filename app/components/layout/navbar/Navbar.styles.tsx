import { styled } from "@mui/system";
import "../../../globals.css";

export const Header = styled("header")`
  font-family: var(--body-font);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--first-color);
  z-index: var(--z-fixed);
  transition: box-shadow 0.4s;
`;

export const Nav = styled("nav")`
  position: relative;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1023px) {
    height: calc(3.5rem + 2rem);
  }
`;

export const NavLogo = styled("a")`
  display: flex;
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;

export const Image = styled("img")`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
`;

export const NavMenu = styled("div")`
  font-weight: 600;

  @media screen and (max-width: 1023px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 6.5rem;
    transition: right 0.4s;
  }
`;

export const NavList = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  list-style: none;
  color: var(--second-color);

  @media screen and (min-width: 1023px) {
    margin-left: auto;
    flex-direction: row;
    font-weight: var(--smaal-font-size);
    text-decoration: none;
    :hover {
      color: var(--hover-navbar-color);
    }
  }
`;

export const NavItem = styled("span")`
  color: var(--second-color);
  transition: color 0.4s;
  text-decoration: none;
  :hover {
    color: var(--fifth-color);
  }
`;

export const NavToggle = styled("div")`
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

  @media screen and (min-width: 1023px) {
    display: none;
  }
`;
