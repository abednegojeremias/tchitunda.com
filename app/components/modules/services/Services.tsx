"use client";
import "../../../globals.css";
import styles from "../../../page.module.css"
import React from "react";
import { Section, SectionDescription, SectionSubtitle, SectionTitle, Services, ServiceContainer, ServiceCard,ServiceTitle, ServicesDescription, Image } from "./Services.styles";
import { services } from "../../../models/SercicesModels";

export default function Service (){
    return (
    <Section>
            <Services className={`${styles.container} ${styles.grid}`}>
                <SectionTitle className={styles.sectiontitle}>SERVICE</SectionTitle>
                <SectionSubtitle className={styles.sectionsubtitle}>Our services</SectionSubtitle>
                <SectionDescription className={styles.sectiondescription}>
                    Discover our services and transform your Vision into Reality", 
                    we open the doors to a world of possibilities where perfection
                    lies in the finest details.
                </SectionDescription>
            </Services>
            <ServiceContainer>
                            {services.map((service, index) => (
                                <ServiceCard key={index}>
                                    <Image src={service.src} alt={service.title} />
                                    <ServiceTitle>{service.title}</ServiceTitle>
                                    <ServicesDescription>{service.description}</ServicesDescription>
                                </ServiceCard>
                            ))}
            </ServiceContainer>
  </Section>
)}  