"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React, { useState } from "react";
import { questions } from "../../../models/QuestionsModels";
import {
  QuestionButton,
  QuestionContainer,
  QuestionData,
  QuestionDescriptions,
  QuestionIcon,
  QuestionTittle,
  Section,
  SectionTitle,
} from "./Questions.styles";

export default function () {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const toggleDescription = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <Section className={styles.section}>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      {questions.map((question, index) => (
        <QuestionContainer className={styles.container} key={index}>
          <QuestionData>
            <QuestionButton
              onClick={() => toggleDescription(index)}
              style={{
                fontWeight: expandedIndex === index ? "bold" : "normal",
                fontSize: expandedIndex === index ? "1.5rem" : "1.5rem",
              }}
              className={`d-arrow ${expandedIndex === index ? "rotate" : ""}`}
            >
              <QuestionTittle>{question.title}</QuestionTittle>
              <QuestionIcon
                className={`${question.icon} ${
                  expandedIndex === index ? "rotate" : ""
                }`}
              />
            </QuestionButton>
            <QuestionDescriptions
              className={expandedIndex === index ? "show" : ""}
            >
              {question.descriptions}
            </QuestionDescriptions>
          </QuestionData>
        </QuestionContainer>
      ))}
    </Section>
  );
}
