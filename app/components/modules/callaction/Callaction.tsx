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
import { Link } from "react-scroll";

export default function CallAction() {
  return (
    <Section className={`${styles.section} ${styles.grid}`}>
      <CallActionContent>
        <CallActionData>
          <CallActionTitle>
            We love to make perfect solutions for yourproject or business
          </CallActionTitle>
          <CallActionDescription>
            Our passion is translating challenges into opportunities. We love
            creating perfect solutions to boost your business, offering
            innovation, excellence and exceptional results. Discover how we can
            elevate your brand by optimizing every aspect of your path to
            success
          </CallActionDescription>
          <Link
            href=""
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <CallActionButton>
              Let's Talk <i className="ri-send-plane-fill"></i>
            </CallActionButton>
          </Link>
        </CallActionData>
      </CallActionContent>
    </Section>
  );
}
