"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React, { useState } from "react";
import { timeworks } from "../../../models/AboutTimeworks.Models";
import {
  Abouts,
  AboutData,
  AboutTitle,
  AboutSubtitle,
  AboutFilters,
  AboutButton,
  AboutContainer,
  AboutImage,
  Image,
  HR,
  TimeWorks,
  TimeWorkData,
  TimeworkBox,
  TimeWorkIcon,
  TimeWorkTitle,
  TimeWorkSubtitle,
} from "./About.styles";

export default function About() {
  const [aboutOption, setAboutOption] = useState<string>("option1");

  const handleButtonClick = (option: string) => {
    setAboutOption(option);
  };

  return (
    <Abouts className={`${styles.section} ${styles.grid}`}>
      <AboutContainer
        className={`${styles.container} ${styles.aboutcontainer}`}
      >
        <AboutData>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutSubtitle>
            Our team comes with the experience and knowledge
          </AboutSubtitle>
          <AboutFilters>
            <AboutButton
              onClick={() => handleButtonClick("option1")}
              style={{
                backgroundColor:
                  aboutOption === "option1" ? "#6a0da8" : "transparent",
                color: aboutOption === "option1" ? "#fff" : "#000000",
              }}
            >
              {" "}
              We are
            </AboutButton>
            <AboutButton
              onClick={() => handleButtonClick("option2")}
              style={{
                backgroundColor:
                  aboutOption === "option2" ? "#6a0da8" : "transparent",
                color: aboutOption === "option2" ? "#fff" : "#000000",
              }}
            >
              {" "}
              Our Vision
            </AboutButton>
            <AboutButton
              onClick={() => handleButtonClick("option3")}
              style={{
                backgroundColor:
                  aboutOption === "option3" ? "#6a0da8" : "transparent",
                color: aboutOption === "option3" ? "#fff" : "#000000",
              }}
            >
              {" "}
              Our History
            </AboutButton>
          </AboutFilters>
          <>
            {aboutOption === "option1" && (
              <p>
                We are an all-in-one agency, bringing together a collective of
                creative minds in design, web design and marketing, with global
                reach, paving the way for more creative easy, quick and
                efficient
              </p>
            )}{" "}
          </>
          <>
            {aboutOption === "option2" && (
              <p>
                We combine technology and talent, offering solutions that can
                change and revolutionize the direction of your business and
                projects.We take care of everything, raising your brand,
                business or project to the pinnacle of visual excellence and
                digital presence.
              </p>
            )}{" "}
          </>
          <>
            {aboutOption === "option3" && (
              <p>
                We are an exclusive group of young creatives passionate about
                art and driven by solving challenges. With more than 5 years of
                expertise, we follow the path of brand development and
                implementation in the digital universe. Join us and witness the
                passion that we infuse into each project
              </p>
            )}{" "}
          </>
        </AboutData>
        <AboutImage>
          <Image src="/images/time-2.png" />
        </AboutImage>
      </AboutContainer>
      <HR />

      <TimeWorks>
        <TimeWorkData>
          {timeworks.map((timework, index) => (
            <TimeworkBox key={index}>
              <TimeWorkIcon  className={timework.icon}/>
              <TimeWorkTitle>{timework.title}</TimeWorkTitle>
              <TimeWorkSubtitle>{timework.subtitle}</TimeWorkSubtitle>
            </TimeworkBox>
          ))}
        </TimeWorkData>
      </TimeWorks>
    </Abouts>
  );
}
