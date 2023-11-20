"use client";
import "../../../globals.css";
import React from "react";
import styles from "../../../page.module.css";
import {
  HomeImage,
  HomeContainer,
  HomeContent,
  HomeData,
  HomeDescriptions,
  HomeSubtitle,
  HomeTitle,
  Homes,
  HomeButton,
  HomeSpan,
} from "./Header.styles";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <Homes className={styles.section} id="header">
      <HomeContainer className={`${styles.container} ${styles.grid}`}>
        <HomeContent>
          <HomeData>
            <HomeSubtitle>BRING YOUR IDEAS TO LIFE</HomeSubtitle>
            <HomeTitle>
              If you can imagine, <HomeSpan>we can project.</HomeSpan>{" "}
            </HomeTitle>
            <HomeDescriptions>
              {" "}
              <i className="ri-shield-check-fill"></i> The best solutions for
              your business!{" "}
            </HomeDescriptions>

            <Link
              href=""
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              {" "}
              <HomeButton>
                {" "}
                Get Started <i className="ri-send-plane-fill"></i>{" "}
              </HomeButton>
            </Link>
          </HomeData>
          <HomeImage src="/images/mediaphone.png" />
        </HomeContent>
      </HomeContainer>
    </Homes>
  );
}
