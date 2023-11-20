"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React from "react";
import { Section } from "./Contact.styles";

export default function Contact() {
  return (
    <Section className={styles.section} id="contact">
      <h2 className={styles.sectiontitle}>CONTACT</h2>
      <h3 className={styles.sectionsubtitle}>
        Want to get your idea off paper?
      </h3>
      <p className={styles.sectiondescription}>
        This invitation is not just a call for a casual chat, but an opportunity
        to participate in a transformative journey, where words turn into
        actions and dreams come to life.
      </p>
    </Section>
  );
}
