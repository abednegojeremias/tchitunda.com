"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React, {useState} from "react";
import {PortfolioCards, PortfolioContainer, PortfolioDescriptions, PortfolioImage, PortfolioModel, PortfolioSubtitle, PortfolioTitle, Section, SectionDescription, SectionSubtitle, SectionTitle } from "./Portfolio.styles";
import { portfolios } from "../../../models/PortifolioModels";
export default function (){
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleCardHover = (index: number) => {
      setActiveCard(index);
    };
  
    const handleCardLeave = () => {
      setActiveCard(null);
    };
    return(
        <Section className={styles.section}>
            <SectionTitle className={styles.sectiontitle}>PORTFOLIO</SectionTitle>
            <SectionSubtitle className={styles.sectionsubtitle}>Our recente works</SectionSubtitle>
            <SectionDescription className={styles.sectiondescription}>
                Welcome to our creative journey, where excellence manifests itself in
                every detail and where the most remarkable projects come to life.
            </SectionDescription>
            <PortfolioContainer className={styles.container}>
                {portfolios.map((portfolio, index)=> (
                  <PortfolioCards
                  key={index}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  style={{
                    transform: activeCard === index ? "scale(1.05)" : "scale(1)",
                  }}
                  >
                    <PortfolioImage src={portfolio.src} alt={portfolio.title} />
                    <PortfolioModel style={{ bottom: activeCard === index ? "0" : "-100%" }}>

                      <PortfolioTitle>{portfolio.title}</PortfolioTitle>
                      <PortfolioSubtitle>{portfolio.subtitle}</PortfolioSubtitle>
                      <PortfolioDescriptions>{portfolio.descreption}</PortfolioDescriptions>
            

                    </PortfolioModel>
                  </PortfolioCards>
                ))}
            </PortfolioContainer>
        </Section>
    )
}