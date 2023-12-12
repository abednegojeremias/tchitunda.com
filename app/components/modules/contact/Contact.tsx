"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContent,
  ContactDescriptions,
  ContactIcon,
  ContactOption,
  ContactOptions,
  ContactSubtitle,
  ContactTitle,
  Form,
  Input,
  InputButton,
  Label,
  Section,
  Span,
  Textearea,
} from "./Contact.styles";
import { contact } from "../../../models/ContactModels";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_iou2cbm",
          "template_608x0nu",
          form.current,
          "3q7pHBygvITu6DsFT"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setMessageSent(true);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form ref is undefined");
    }
  };
  useEffect(() => {
    if (messageSent) {
      const timeoutId = setTimeout(() => {
        setMessageSent(false);
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [messageSent]);

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

      {messageSent && (
        <div className={styles.successMessage}>
          <p>
            Message sent successfully <i className="ri-check-double-line"></i>
          </p>
        </div>
      )}

      <ContactContent>
        <ContactOptions>
          {contact.map((contacts, index) => (
            <ContactOption key={index}>
              <ContactIcon className={contacts.icon} />
              <ContactTitle>{contacts.title}</ContactTitle>
              <ContactSubtitle>{contacts.subtitle}</ContactSubtitle>
              <ContactDescriptions href={contacts.link}>
                Send messange
              </ContactDescriptions>
            </ContactOption>
          ))}
        </ContactOptions>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>
            Name <Span>*</Span>
          </Label>
          <Input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            minLength={4}
            pattern="[a-zA-Z ]{1,50}"
            title="Please enter a valid name (up to 50 characters)"
            required
          />
          <Label>
            Email <Span>*</Span>
          </Label>
          <Input
            type="email"
            name="user_email"
            placeholder="Your Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            required
          />

          <Label>
            Phone Number <Span>*</Span>
          </Label>

          <Input
            type="tel"
            id="phone"
            name="user_phone"
            placeholder="Your Number"
            pattern="[0-9]{9,12}"
            title="Please enter a valid phone number (9 to 12 digits)"
            required
          />

          <Label>
            Message <Span>*</Span>
          </Label>
          <Textearea
            name="message"
            rows={7}
            placeholder="Your Mesaage"
            title="Please enter a message (up to 500 characters)"
            required
          />
          <InputButton type="submit" value="Send" />
        </Form>
      </ContactContent>
    </Section>
  );
}
