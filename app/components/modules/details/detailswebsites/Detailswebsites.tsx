"use client";
import "../../../../globals.css";
import styles from "../../../../page.module.css";
import React from "react";
import { detailshomestaps } from "../../../../models/DetailswebsiteModels";
import {
  Section,
  DetailHomes,
  DetailTitle,
  DetailSubtitle,
  DetailDescription,
  DetailData,
  DetailButton,
  DetailStaps,
  DetailStapsList,
  DetailStapsIcon,
  DetailStapsTitle,
  DetailStapsDescription,
} from "./Detailswebsites.styles";

export default function Detailswebsites () {
  return (
    <Section className={`${styles.section} ${styles.grid}`}>
      <DetailHomes className={styles.container}>
        <DetailData>
          <DetailTitle>HOW MARKETING WORKS</DetailTitle>
          <DetailSubtitle>
            We love bringing ideas to life and bringing perfect solutions for
            your business.
          </DetailSubtitle>
          <DetailDescription>
            Every idea is a seed of potential, a spark that can grow into
            something extraordinary when cultivated with passion and expertise.
            It is with this commitment that we approach each project, ready to
            embrace challenges and seek solutions that not only meet, but exceed
            your expectations
          </DetailDescription>
          <DetailButton href="">
            Let's Talk <i className="ri-send-plane-fill"></i>{" "}
          </DetailButton>
        </DetailData>
        <DetailStaps>
          {detailshomestaps.map((detailshomestap, index) => (
            <DetailStapsList key={index}>
              <DetailStapsTitle>
                <DetailStapsIcon className={detailshomestap.icon} />{" "}
                {detailshomestap.title}
              </DetailStapsTitle>
              <DetailStapsDescription>
                {detailshomestap.description}
              </DetailStapsDescription>
            </DetailStapsList>
          ))}
        </DetailStaps>
      </DetailHomes>
    </Section>
  );
}
