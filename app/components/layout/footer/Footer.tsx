"use client";
import "../../../globals.css";
import React from "react";
import {
  Footers,
  FooterContainer,
  FooterContent,
  Image,
  LogoImage,
  FooterCards,
  FooterDescriptions,
  FooterSM,
  FooterLink,
  CardTitle,
  CardDescriptions,
  FooterCopyRightText,
  I,
  CardList,
} from "./Footer.styles";
import { footers } from "../../../models/FooterModels";
export default function Footer() {
  return (
    <Footers>
      <FooterContainer>
        <FooterContent>
          <LogoImage>
            <Image src="/static/tchitunda.svg" />
          </LogoImage>
          <FooterDescriptions>
            We combine technology and talent, offering a solution that can
            revolutionize your business and your projects.
          </FooterDescriptions>
          <FooterSM>
            <li>
              <FooterLink href="/">
                <I className="ri-facebook-fill"></I>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="/">
                <I className="ri-instagram-fill"></I>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="/">
                <I className="ri-linkedin-fill"></I>
              </FooterLink>
            </li>
          </FooterSM>
        </FooterContent>
        {footers.map((footer, index) => (
          <FooterCards key={index}>
            <CardTitle>{footer.title}</CardTitle>
            <ul>
              <CardList>
                <CardDescriptions href={footer.link1}>
                  {footer.descriptions1}
                </CardDescriptions>
              </CardList>
              <CardList>
                <CardDescriptions href={footer.link2}>
                  {footer.descriptions2}
                </CardDescriptions>
              </CardList>
              <CardList>
                <CardDescriptions href={footer.link3}>
                  {footer.descriptions3}
                </CardDescriptions>
              </CardList>
              <CardList>
                <CardDescriptions href={footer.link4}>
                  {footer.descriptions4}
                </CardDescriptions>
              </CardList>
            </ul>
          </FooterCards>
        ))}
      </FooterContainer>
      <hr />
      <FooterCopyRightText>
        © 2024 Tchitunda. All Rights Reserved.
      </FooterCopyRightText>
    </Footers>
  );
}
