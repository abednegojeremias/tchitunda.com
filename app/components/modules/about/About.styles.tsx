import "../../../globals.css";
import styled, { StyledTags } from "@emotion/styled";

export const Abouts = styled("div")`
  margin-top: 130px;

  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
    margin-bottom: 8rem;
  }
`;
export const AboutContainer = styled("div")`
 
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    display: grid;
  }
`;
export const AboutData = styled("div")`
  @media screen and (min-width: 320px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 320px) {
    border-left: none;
  }
  @media screen and (min-width: 1023px) {
    border-left: 10px solid var(--first-color);
    padding-left: 20px;
  }
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
  position: relative;
  display: flex;
  justify-content: center;
  height: 260px;
  @media screen and (min-width: 1024px) {
    height: 400px;
    margin-inline: -4rem;
  }
  @media screen and (min-width: 320px) {
    margin-top: 1.5rem;
  }
`;

export const Image = styled("img")`
  justify-self: center;
`;
