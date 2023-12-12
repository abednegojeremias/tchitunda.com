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
  DataStaps,
  DetailStapsIcon,
  DetailStapsTitle,
  DetailStapsDescription,
} from "./Detailswebsites.styles";
import { Link } from "react-scroll";

export default function Detailsmarketing() {
  return (
    <Section
      className={`${styles.section} ${styles.grid}`}
      id="detailswebsites"
    >
      <DetailHomes className={styles.container}>
        <DetailData>
          <DetailTitle>HOW WEB DEVELOPMENT WORKS</DetailTitle>
          <DetailSubtitle>Business in current times</DetailSubtitle>
          <DetailDescription>
            In an increasingly connected world, online presence is crucial to
            business success. Having a website is not just an advantage, but a
            necessity. It not only expands the company's global visibility, but
            also builds its digital identity, acting as a virtual storefront.
            This online presence is the first impression many potential
            customers will have, directly influencing their perception of your
            brand.
          </DetailDescription>
          <Link
            href=""
            to="plans"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <DetailButton>
              {" "}
              See Plans <i className="ri-send-plane-fill"></i>{" "}
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
