"use client";
import "../../../../globals.css";
import styles from "../../../../page.module.css";
import React from "react";
import { detailshomestaps } from "../../../../models/DetailssocialmediaModels";
import {
  Section,
  DetailHomes,
  DetailTitle,
  DetailSubtitle,
  DetailDescription,
  DetailData,
  DetailButton,
  DataStaps,
  DetailStapsIcon,
  DetailStapsTitle,
  DetailStapsDescription,
  HR,
} from "./Detailssocialmedia.styles";
import { Link } from "react-scroll";

export default function Detailsmarketing() {
  return (
    <Section className={`${styles.section} ${styles.grid}`} id="detailssocialmedia">
      <DetailHomes className={styles.container}>
        <DetailData>
          <DetailTitle>HOW SOCIAL MEDIA MANAGEMENT WORKS </DetailTitle>
          <DetailSubtitle>Presence on social media</DetailSubtitle>
          <DetailDescription>
            A presence on social media is an essential digital marketing tool,
            but many companies, especially small ones, still do not take
            advantage of this opportunity due to a lack of time and resources.
            We offer customized solutions to overcome these obstacles, helping
            businesses build a strong and impactful online presence.
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
              Let's start <i className="ri-send-plane-fill"></i>{" "}
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
      <HR />
    </Section>
  );
}
