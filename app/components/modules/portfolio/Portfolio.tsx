"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React, { useState } from "react";
import {
  PortfolioCards,
  PortfolioContainer,
  PortfolioDescriptions,
  PortfolioImage,
  PortfolioModel,
  PortfolioSubtitle,
  PortfolioTitle,
  Section,

} from "./Portfolio.styles";
import { portfolios } from "../../../models/PortifolioModels";

export default function () {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };
  return (
    <Section className={styles.section} id="portfolio">
      <h2 className={styles.sectiontitle}>PORTFOLIO</h2>
      <h3 className={styles.sectionsubtitle}>Our recente works</h3>
      <p className={styles.sectiondescription}>
        Welcome to our creative journey, where excellence manifests itself in
        every detail and where the most remarkable projects come to life.
      </p>
      <PortfolioContainer className={styles.container}>
        {portfolios.map((portfolio, index) => (
          <PortfolioCards
            key={index}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            style={{
              transform: activeCard === index ? "scale(1.05)" : "scale(1)",
            }}
          >
            <PortfolioImage src={portfolio.src} alt={portfolio.title} />
            <PortfolioModel
              style={{ bottom: activeCard === index ? "0" : "-100%" }}
            >
              <PortfolioTitle>{portfolio.title}</PortfolioTitle>
              <PortfolioSubtitle>{portfolio.subtitle}</PortfolioSubtitle>
              <PortfolioDescriptions>
                {portfolio.descreption}
              </PortfolioDescriptions>
            </PortfolioModel>
          </PortfolioCards>
        ))}
      </PortfolioContainer>
    </Section>
  );
}
