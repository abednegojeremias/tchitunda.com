"use client";
import "../../../globals.css";
import styles from "../../../page.module.css";
import { useState } from "react";
import {
  CardsBox,
  CardButton,
  SliderPlan1,
  SliderPlan2,
  SliderPlan3,
  Header,
  HeaderOptions,
  Label,
  PlanContainer,
  PlanContent,
  Section,
  CardsDetails,
  Box,
  Box1,
  Box2,
  Box3,
  PricingDeatils,
  Span,
  Data,
  Icon,
  Descriptions,
  Subtitle,
  Input,
  Cards,
  Personalization,
  PersalLink,
  PersalSpan,
  Month,
} from "./Plans.styles";
import { plan } from "../../../models/PlansModels";
import { Link } from "react-scroll";

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<string>("plan-1");
  const [selectedBox, setSelectedBox] = useState<string>("box-1");
  const handlePlanChange = (planId: string) => {
    setSelectedPlan(planId);
    setSelectedBox(`box-${planId.split("-")[1]}`);
  };

  return (
    <Section className={`${styles.section} ${styles.container}`} id="plans">
      <h2 className={styles.sectiontitle}>Our Plans</h2>
      <h3 className={styles.sectionsubtitle}>Pricing and Plans</h3>
      <p className={styles.sectiondescription}>Discover our plans</p>

      <Input type="radio" name="slider" id="plan-1" />
      <Input type="radio" name="slider" id="plan-2" />
      <Input type="radio" name="slider" id="plan-3" />

      <Header>
        <HeaderOptions>
          <Label
            htmlFor="plan-1"
            className={`Plan-1 ${selectedPlan === "plan-1" ? "active" : ""}`}
            onClick={() => handlePlanChange("plan-1")}
            style={{
              color: selectedPlan === "plan-1" ? "#fff" : "#000",
            }}
          >
            Basic
          </Label>

          <Label
            htmlFor="plan-2"
            className={`Plan-2 ${selectedPlan === "plan-2" ? "active" : ""}`}
            onClick={() => handlePlanChange("plan-2")}
            style={{
              color: selectedPlan === "plan-2" ? "#fff" : "#000",
            }}
          >
            Light
          </Label>

          <Label
            htmlFor="plan-3"
            className={`Plan-3 ${selectedPlan === "plan-3" ? "active" : ""}`}
            onClick={() => handlePlanChange("plan-3")}
            style={{
              color: selectedPlan === "plan-3" ? "#fff" : "#000",
            }}
          >
            Pro
          </Label>

          {selectedPlan === "plan-1" && <SliderPlan1 />}
          {selectedPlan === "plan-2" && <SliderPlan2 />}
          {selectedPlan === "plan-3" && <SliderPlan3 />}
        </HeaderOptions>
      </Header>

      <Cards>
        <PlanContainer>
          <PlanContent className="Social Media Management">
            <CardsBox>
              <CardsDetails>
                <Box>
                  {selectedBox === "box-1" && (
                    <Box1 id="box-1">
                      <PricingDeatils>
                        <Subtitle>Social Media</Subtitle>
                        <Span>
                          R350<Month>/month</Month>{" "}
                        </Span>
                      </PricingDeatils>

                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            <Icon className={plans.icon1} />{" "}
                            {plans.description1}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon2} />{" "}
                            {plans.description2}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon3} />{" "}
                            {plans.description3}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon4} />{" "}
                            {plans.description4}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon5} />{" "}
                            {plans.description5}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon6} />{" "}
                            {plans.description6}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon7} />{" "}
                            {plans.description7}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box1>
                  )}
                  {selectedBox === "box-2" && (
                    <Box2 className="box-2">
                      <PricingDeatils>
                        <Subtitle>Social Media</Subtitle>
                        <Span>
                          R450<Month>/month</Month>{" "}
                        </Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            <Icon className={plans.icon8} />{" "}
                            {plans.description8}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon9} />{" "}
                            {plans.description9}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon10} />{" "}
                            {plans.description10}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon11} />{" "}
                            {plans.description11}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon12} />{" "}
                            {plans.description12}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon13} />{" "}
                            {plans.description13}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon14} />{" "}
                            {plans.description14}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon15} />{" "}
                            {plans.description15}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box2>
                  )}
                  {selectedBox === "box-3" && (
                    <Box3 className="Box-3">
                      <PricingDeatils>
                        <Subtitle>Social Media</Subtitle>
                        <Span>
                          R600<Month>/month</Month>{" "}
                        </Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            <Icon className={plans.icon16} />{" "}
                            {plans.description16}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon17} />{" "}
                            {plans.description17}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon18} />{" "}
                            {plans.description18}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon19} />{" "}
                            {plans.description19}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon20} />{" "}
                            {plans.description20}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon21} />{" "}
                            {plans.description21}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon22} />{" "}
                            {plans.description22}
                          </Descriptions>
                          <Descriptions>
                            <Icon className={plans.icon23} />{" "}
                            {plans.description23}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box3>
                  )}
                </Box>
              </CardsDetails>
            </CardsBox>
          </PlanContent>

          <Link
            href=""
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <CardButton>Let's talk</CardButton>
          </Link>
        </PlanContainer>
        <PlanContainer>
          <PlanContent className="Graphic Design">
            <CardsBox>
              <CardsDetails>
                <Box>
                  {selectedBox === "box-1" && (
                    <Box1 id="box-1">
                      <PricingDeatils>
                        <Subtitle>Graphic Design</Subtitle>
                        <Span>
                          R300<Month>/single</Month>{" "}
                        </Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon24} />{" "}
                            {plans.description24}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon25} />{" "}
                            {plans.description25}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon26} />{" "}
                            {plans.description26}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon27} />{" "}
                            {plans.description27}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon28} />{" "}
                            {plans.description28}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon29} />{" "}
                            {plans.description29}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon30} />{" "}
                            {plans.description30}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box1>
                  )}
                  {selectedBox === "box-2" && (
                    <Box2 className="box-2">
                      <PricingDeatils>
                        <Subtitle>Graphic Design</Subtitle>
                        <Span>
                          R400<Month>/single</Month>
                        </Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon31} />{" "}
                            {plans.description31}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon32} />{" "}
                            {plans.description32}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon33} />{" "}
                            {plans.description33}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon34} />{" "}
                            {plans.description34}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon35} />{" "}
                            {plans.description35}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon36} />{" "}
                            {plans.description36}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon37} />{" "}
                            {plans.description37}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box2>
                  )}
                  {selectedBox === "box-3" && (
                    <Box3 className="Box-3">
                      <PricingDeatils>
                        <Subtitle>Graphic Design</Subtitle>
                        <Span>
                          R580<Month>/single</Month>
                        </Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon38} />{" "}
                            {plans.description38}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon39} />{" "}
                            {plans.description39}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon40} />{" "}
                            {plans.description40}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon41} />{" "}
                            {plans.description41}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon42} />{" "}
                            {plans.description42}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon43} />{" "}
                            {plans.description43}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box3>
                  )}
                </Box>
              </CardsDetails>
            </CardsBox>
          </PlanContent>

          <Link
            href=""
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <CardButton>Let's talk</CardButton>
          </Link>
        </PlanContainer>
        <PlanContainer>
          <PlanContent className="Web Design">
            <CardsBox>
              <CardsDetails>
                <Box>
                  {selectedBox === "box-1" && (
                    <Box1 id="box-1">
                      <PricingDeatils>
                        <Subtitle>WebSites</Subtitle>
                        <Span>
                          R200 <Month>/single</Month>{" "}
                        </Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon44} />{" "}
                            {plans.description44}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon45} />{" "}
                            {plans.description45}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon46} />{" "}
                            {plans.description46}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon47} />{" "}
                            {plans.description47}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon48} />{" "}
                            {plans.description48}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon49} />{" "}
                            {plans.description49}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon50} />{" "}
                            {plans.description50}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box1>
                  )}
                  {selectedBox === "box-2" && (
                    <Box2 className="box-2">
                      <PricingDeatils>
                        <Subtitle>WebSites</Subtitle>
                        <Span>R300</Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon51} />{" "}
                            {plans.description51}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon52} />{" "}
                            {plans.description52}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon53} />{" "}
                            {plans.description53}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon54} />{" "}
                            {plans.description54}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon55} />{" "}
                            {plans.description55}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon56} />{" "}
                            {plans.description56}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon57} />{" "}
                            {plans.description57}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon58} />{" "}
                            {plans.description58}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box2>
                  )}
                  {selectedBox === "box-3" && (
                    <Box3 className="Box-3">
                      <PricingDeatils>
                        <Subtitle>WebSites</Subtitle>
                        <Span>R400</Span>
                      </PricingDeatils>
                      {plan.map((plans, index) => (
                        <Data key={index}>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon59} />{" "}
                            {plans.description59}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon60} />{" "}
                            {plans.description60}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon61} />{" "}
                            {plans.description61}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon62} />{" "}
                            {plans.description62}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon63} />{" "}
                            {plans.description63}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon64} />{" "}
                            {plans.description64}
                          </Descriptions>
                          <Descriptions>
                            {" "}
                            <Icon className={plans.icon65} />{" "}
                            {plans.description65}
                          </Descriptions>
                        </Data>
                      ))}
                    </Box3>
                  )}
                </Box>
              </CardsDetails>
            </CardsBox>
          </PlanContent>
          <Link
            href=""
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <CardButton>Let's talk</CardButton>
          </Link>
        </PlanContainer>
      </Cards>

      <Personalization>
        <PersalSpan>Have higher or different needs?</PersalSpan>
        <PersalLink href="/">WhatsApp</PersalLink>
      </Personalization>
    </Section>
  );
}
