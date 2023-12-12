"use client";
import "../../../globals.css";
import React from "react";
import {
  Footers,
  FooterContainer,
  Image,
  FooterDescriptions,
  FooterSM,
  FooterLink,
  CardTitle,
  CardDescriptions,
  FooterCopyRightText,
  I,
  CardList,
  CardDescription,
} from "./Footer.styles";

import { Link } from "react-scroll";

export default function Footer() {
  return (
    <Footers>
      <FooterContainer>
        <div>
          <div>
            <Image src="/static/tchitunda.svg" />
          </div>
          <FooterDescriptions>
            We combine technology and talent, offering a solution that can
            revolutionize your business and your projects.
          </FooterDescriptions>
          <FooterSM>
            <li>
              <FooterLink href="https://www.facebook.com/tchitunda.dev">
                <I className="ri-facebook-fill"></I>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://www.instagram.com/tchitunda.dev/">
                <I className="ri-instagram-fill"></I>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://www.linkedin.com/company/tchitunda/">
                <I className="ri-linkedin-fill"></I>
              </FooterLink>
            </li>
          </FooterSM>
        </div>

        <div>
          <CardTitle>Company</CardTitle>
          <ul>
            <CardList>
              <Link
                href=""
                to="header"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Home</CardDescriptions>
              </Link>
            </CardList>
            <CardList>
              <Link
                href=""
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>About</CardDescriptions>
              </Link>
            </CardList>
            <CardList>
              <Link
                href=""
                to="portfolio"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Recents Works</CardDescriptions>
              </Link>
            </CardList>
            <CardList>
              <Link
                href=""
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Contact</CardDescriptions>
              </Link>
            </CardList>
          </ul>
        </div>

        <div>
          <CardTitle>Solutions</CardTitle>
          <ul>
            <CardList>
              <Link
                href=""
                to="detailsdesign"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Graphic Design</CardDescriptions>
              </Link>
            </CardList>
            <CardList>
              <Link
                href=""
                to="detailssocialmedia"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Social Media Management</CardDescriptions>
              </Link>
            </CardList>
            <CardList>
              <Link
                href=""
                to="detailswebsites"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Website Development</CardDescriptions>
              </Link>
            </CardList>
          </ul>
        </div>

        <div>
          <CardTitle>Pricing</CardTitle>
          <ul>
            <CardList>
              <CardDescription href="https://api.whatsapp.com/send?phone+244925423854">
                Quick Order
              </CardDescription>
            </CardList>
            <CardList>
              <Link
                href=""
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Resquest A Demo</CardDescriptions>
              </Link>
            </CardList>
            <CardList>
              <Link
                href=""
                to="plans"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <CardDescriptions>Prices</CardDescriptions>
              </Link>
            </CardList>
          </ul>
        </div>
      </FooterContainer>
      <hr />
      <FooterCopyRightText>
        © 2024 Tchitunda. All Rights Reserved.
      </FooterCopyRightText>
    </Footers>
  );
}
