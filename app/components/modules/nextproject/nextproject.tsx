"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React from "react";
import { NextProjectsSubtitle, NextProjectsDescription , NextProjects, NextProjectsContent, NextProjectsData, NextProjectsTitle, Section, NextProjectsImage, NextProjectsButton } from "./nextproject.styles";


export default function NextProject(){
    return(
       
        <Section className={styles.grid}>
            <NextProjects className={styles.container}>
                <NextProjectsContent>
                    <NextProjectsData>
                        <NextProjectsTitle>LET'S TALK</NextProjectsTitle>
                        <NextProjectsSubtitle>ABOUT YOUR</ NextProjectsSubtitle>
                        <NextProjectsDescription >NEXT PROJECT</NextProjectsDescription >
                        <NextProjectsButton href=""> Get Started <i className="ri-send-plane-fill"></i></NextProjectsButton>
                    </NextProjectsData>
                    <NextProjectsImage src="/images/handmobile.png"/>
                </NextProjectsContent>
            </NextProjects>
        </Section>
    )
}