"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import React from "react";
import { CardButton, CardDescription, CardHeader, CardIcon, CardMonth, CardPrice, CardPricing, CardTitle, PlanContainer, PlanContent, Section, } from "./Plans.styles";
import { plan } from "../../../models/PlansModels";


export default function Plans(){
    return(
        <Section className={styles.section}>

            <h2 className={styles.sectiontitle}>Our Plans</h2>
            <h3 className={styles.sectionsubtitle}>Pricing and Plans</h3>
            <p className={styles.sectiondescription}>Discover our plans</p>

            <PlanContainer>
                {plan.map((plans, index)=> (
                    <PlanContent key={index}>
                        <CardHeader>
                            <CardTitle>{plans.title}</CardTitle>
                        </CardHeader>

                       <CardPricing>
                         <CardMonth><CardPrice>{plans.number}</CardPrice> {plans.month} </CardMonth>
                       </CardPricing>
                        <ul style={{marginBottom:'.2rem', rowGap:'.5rem'}}>
                           <li style={{display:'flex', alignItems:'center'}}>
                                <CardIcon className={plans.icon} />
                                <CardDescription>{plans.description1}</CardDescription>
                            </li> 
                           <li style={{display:'flex', alignItems:'center'}}>
                                <CardIcon className={plans.icon} />
                                <CardDescription>{plans.description1}</CardDescription>
                            </li> 
                           <li style={{display:'flex', alignItems:'center'}}>
                                <CardIcon className={plans.icon} />
                                <CardDescription>{plans.description2}</CardDescription>
                            </li> 
                           <li style={{display:'flex', alignItems:'center'}}>
                                <CardIcon className={plans.icon} />
                                <CardDescription>{plans.description3}</CardDescription>
                            </li> 
                           <li style={{display:'flex', alignItems:'center'}}>
                                <CardIcon className={plans.icon} />
                                <CardDescription>{plans.description4}</CardDescription>
                            </li> 
                           <li style={{display:'flex', alignItems:'center'}}>
                                <CardIcon className={plans.icon} />
                                <CardDescription>{plans.description5}</CardDescription>
                            </li> 
                        </ul>
                        <CardButton href={plans.link}>{plans.button} <i className="ri-send-plane-fill"></i> </CardButton>
                    </PlanContent>
                ))}
            </PlanContainer>
        </Section>
    )
}