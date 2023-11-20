import "../../../globals.css";
import styled from "@emotion/styled";

export const Abouts = styled("div")`
  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;

export const AboutContainer = styled("div")`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr !important;
  }

  @media screen and (min-width: 1023px) {
    grid-template-columns: 400px 400px !important;
    align-items: center;
    column-gap: 8rem;
  }

  @media screen and (min-width: 1040px) {
    grid-template-columns: 400px 400px !important;
    align-items: center;
    column-gap: 8rem;
  }
  @media screen and (min-width: 1260px) {
    grid-template-columns: 400px 470px !important;
    column-gap: 10rem;
  }
`;

export const AboutData = styled("div")`
  @media screen and (min-width: 1022px) {
    order: 1;
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const AboutTitle = styled("h3")`
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  color: var(--first-color);
  font-size: var(--h3-font-size);
  border-left: 10px solid var(--first-color);
  padding-left: 20px;
`;

export const AboutDescription = styled("p")`
  margin-bottom: 2rem;
`;

export const AboutSubtitle = styled("h2")`
  @media screen and (min-width: 320px) {
    font-size: var(--normal-font-size);
  }
  @media screen and (min-width: 767px) {
    font-size: var(--h3-font-size);
  }
  @media screen and (min-width: 1024px) {
    font-size: var(--h3-font-size);
  }
`;

export const AboutButton = styled("a")`
  width: 70%;
  border: none;
  outline: none;
  padding: 1rem;
  font-size: var(--font-semi-bold);
  font-weight: 500;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: transparent;
  transition: 0.3s;
  text-align: center;

  @media screen and (min-width: 320px) {
    width: 100%;
  }
`;

export const AboutFilters = styled("div")`
  margin: 2rem 0 2.5rem;
  background-color: var(--sixth-color);
  padding: 0.875rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  column-gap: 0.6rem;

  @media screen and (min-width: 320px) {
    text-align: center;
  }

  @media screen and (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0.6rem;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.6rem;
  }
  @media screen and (min-width: 1023px) {
    font-size: 0.9rem;
  }
`;

export const AboutImage = styled("div")`
  display: flex;
  justify-content: center;
  height: 230px;

  @media screen and (min-width: 1040px) {
    height: 400px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1039px) {
    height: 320px;
  }

  @media screen and (min-width: 320px) {
    margin-top: 1.5rem;
  }
`;

export const Image = styled("img")`
  justify-self: center;
  display: grid;
`;

export const HR = styled("hr")`
  max-width: 25%;
  margin-top: 4rem;
  border: 1px solid var(--first-color);
`;

export const TimeWorks = styled("section")`
  padding: 1px 0;
  text-align: center;
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    padding: 1px 0;
    text-align: center;
    margin: 100px auto;
  }
`;

export const TimeWorkData = styled("div")`
  grid-template-columns: repeat(3, 180px);
  column-gap: 5rem;
  justify-content: center;
  display: grid;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 100px);
    column-gap: 1rem;
    justify-content: center;
    display: grid;
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(3, 90px);
    column-gap: 1rem;
    justify-content: center;
    display: grid;
  }
`;

export const TimeworkBox = styled("div")``;

export const TimeWorkIcon = styled("i")`
  font-size: 2rem;
  color: var(--first-color);
`;
export const TimeWorkTitle = styled("h3")`
  @media screen and (min-width: 320px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  font-size: 1.5rem;
  color: var(--first-color);
`;

export const TimeWorkSubtitle = styled("span")`
  @media screen and (min-width: 320px) {
    font-size: 0.8rem;
  }
`;
