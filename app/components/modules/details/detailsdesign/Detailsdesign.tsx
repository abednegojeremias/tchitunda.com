"use client";
import "../../../../globals.css";
import styles from "../../../../page.module.css";
import React from "react";
import {
  Section,
  DetailHomes,
  DetailTitle,
  DetailSubtitle,
  DetailDescription,
  DetailData,
  DetailButton,
  DetailStapsIcon,
  DetailStapsTitle,
  DetailStapsDescription,
  DataStaps,
} from "./Detailsdesign.styles";
import { Link, LinkProps } from "react-scroll";
import { detailshomestaps } from "../../../../models/DetailsdesignModels";

export default function Datailsdesign() {
  return (
    <Section className={`${styles.section}`} id="detailsdesign">
      <DetailHomes className={styles.container}>
        <DetailData>
          <DetailTitle>HOW DESIGN WORKS</DetailTitle>
          <DetailSubtitle>
            Build Your Digital Presence with Style and Impact
          </DetailSubtitle>
          <DetailDescription>
            We go beyond aesthetics - we create a unique visual experience that
            defines your brand. Combining beauty and functionality, our engaging
            design not only attracts, but builds a lasting connection with your
            audience.
          </DetailDescription>
          <Link
            href=""
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <DetailButton>
              {" "}
              Let's talk <i className="ri-send-plane-fill"></i>{" "}
            </DetailButton>
          </Link>
        </DetailData>

        <div>
          {detailshomestaps.map((detailshomestap, index) => (
            <li key={index}>
              <DataStaps>
                <DetailStapsIcon>{detailshomestap.number} </DetailStapsIcon>
                <DetailStapsTitle> {detailshomestap.title}</DetailStapsTitle>
              </DataStaps>
              <DetailStapsDescription>
                {detailshomestap.description}
              </DetailStapsDescription>
            </li>
          ))}
        </div>
      </DetailHomes>
    </Section>
  );
}
