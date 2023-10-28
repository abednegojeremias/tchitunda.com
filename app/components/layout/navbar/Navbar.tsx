"use client";
import "../../../globals.css";
import React from "react";
import styles from "../../../page.module.css";
import MobileMenu from "../../tooltip/MobileMenu";
import { navbar } from "../../../models/NavModels";
import { homelink } from "../../../models/HomeLinkModels";

import { Header, Nav, NavLogo, Image, NavMenu, NavList, NavItem, NavLink, NavToggle } from "./Navbar.styles";

export default function Navbar(){

    const [showMobile, setShowMobile] = React.useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setShowMobile(!showMobile);
    };
    return(
        <Header>
            <Nav className={styles.container}>
                {homelink.map((homelink, index)=> (
                <NavLogo key={index} className={homelink.link}>
                    <Image src="/static/icon-navbar.svg"/>
                </NavLogo>
                ))}
                <NavMenu>
                    <NavList>
                        <NavItem>
                            {navbar.map((navbar, index) => (
                                <NavLink key={index} href={navbar.link}>
                                    {navbar.title}
                                </NavLink>
                            ))}
                        </NavItem>
                    </NavList>
                </NavMenu>
                <NavToggle onClick={(event) => handleClick(event)} id="nav-toggles">
                     <i className="ri-menu-fill"></i>
                </NavToggle>
                {showMobile && <MobileMenu setIsActive={setShowMobile} />}
            </Nav>
        </Header>
    )
}