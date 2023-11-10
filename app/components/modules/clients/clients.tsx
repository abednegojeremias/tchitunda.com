"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React from "react";
import {
  ClientBox,
  ClientData,
  ClientLogo,
  Section,
  ClienTitle,
} from "./client.styles";
import { client } from "../../../models/ClientsModels";

export default function Clients() {
  return (
    <Section className={`${styles.section} ${styles.gird} ${styles.container}`}>
      <ClienTitle>Trusted By Thousands of Brands Worldwide</ClienTitle>
      <ClientData>
        {client.map((clients, index) => (
          <ClientBox key={index}>
            <ClientLogo src={clients.src} />
          </ClientBox>
        ))}
      </ClientData>
    </Section>
  );
}
