"use client";
import "../../../globals.css";
import React from "react";
import styles from "../../../page.module.css";
import {HomeImage, HomeContainer, HomeContent, HomeData, HomeDescriptions, HomeSubtitle, HomeTitle, Homes, HomeButton, HomeSpan,} from "./Header.styles";
export default function Home() {
    return(
        <Homes className={styles.section}>
            <HomeContainer className={`${styles.container} ${styles.grid}`}>
                <HomeContent>
                    <HomeData>

                        <HomeSubtitle>BRING YOUR IDEAS TO LIFE</HomeSubtitle>
                        <HomeTitle>If you can imagine, <HomeSpan>we can project.</HomeSpan> </HomeTitle>
                        <HomeDescriptions> 
                            <i className="ri-shield-check-fill"></i> 
                            THE BEST SOLUTIONS!
                        </HomeDescriptions>
                        <HomeButton href="/">
                            Get Started <i className="ri-send-plane-fill"></i>
                        </HomeButton>
                    </HomeData>
                    <HomeImage src="/images/mediaphone.png" />
                </HomeContent>
            </HomeContainer>
        </Homes>
    )
}

