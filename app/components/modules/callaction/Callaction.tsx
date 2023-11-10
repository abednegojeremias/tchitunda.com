"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React from "react";
import {
  CallActionButton,
  CallActionContent,
  CallActionData,
  CallActionDescription,
  CallActionTitle,
  Section,
} from "./Callaction.styles";

export default function CallAction() {
  return (
    <Section className={`${styles.section} ${styles.grid}`}>
      <CallActionContent>
        <CallActionData>
          <CallActionTitle>
            We love to make perfect solutions for your business
          </CallActionTitle>
          <CallActionDescription>
            Why I say old chap that is, spiffing off his nut cor blimey guvnords
            geeza bloke knees up bobby, sloshed arse William cack Richard. Bloke
            fanny around chesed of bum bag old lost the pilot say there spiffing
            off his nut.
          </CallActionDescription>
          <CallActionButton href="">
            Let's Talk <i className="ri-send-plane-fill"></i>
          </CallActionButton>
        </CallActionData>
      </CallActionContent>
    </Section>
  );
}
