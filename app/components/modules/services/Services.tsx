"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React from "react";
import {
  Section,
  Services,
  ServiceContainer,
  ServiceCard,
  ServiceTitle,
  ServicesDescription,
  Image,
} from "./Services.styles";
import { services } from "../../../models/SercicesModels";

export default function Service() {
  return (
    <Section id="service">
      <Services className={styles.container}>
        <h2 className={styles.sectiontitle}>SERVICE</h2>
        <h3 className={styles.sectionsubtitle}>Our services</h3>
        <p className={styles.sectiondescription}>
          Discover our services and transform your Vision into Reality", we open
          the doors to a world of possibilities where perfection lies in the
          finest details.
        </p>
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
  );
}
