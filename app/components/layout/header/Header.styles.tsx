import "../../../globals.css";
import { styled } from "@mui/system";

export const Homes = styled("div")`
  font-family: var(--body-font);
  background-color: var(--first-color);

  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;

export const HomeContainer = styled("div")`
  padding-top: 2rem;
  row-gap: 2.5rem;
`;

export const HomeContent = styled("div")`
  display: grid;
  row-gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 1.5rem;
    display: grid;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 455px 600px;
    column-gap: 10rem;
    padding-block: 2rem 2rem;
  }
`;

export const HomeData = styled("div")`
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: initial;
  }
`;

export const HomeTitle = styled("h1")`
  color: var(--second-color);
  font-size: var(--h1-font-size);

  @media screen and (min-width: 768px) {
    font-size: var(--big-font-size);
  }
  @media screen and (min-width: 1024px) {
    font-size: var(--bigged-font-size);
  }
  @media screen and (min-width: 1280px) {
    font-size: var(--h1-font-size);
  }
`;

export const HomeSubtitle = styled("h3")`
  color: var(--second-color);
  margin-bottom: 1rem;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    font-size: var(--h3-font-size);
  }
`;

export const HomeDescriptions = styled("h3")`
  line-height: 150%;
  margin-bottom: 3rem;
  color: var(--forth-color);
  font-size: 0.7rem;

  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const HomeSpan = styled("span")`
  color: var(--forth-color);
`;

export const HomeButton = styled("span")`
  display: inline-block;
  background-color: var(--second-color);
  padding: 1.125rem 3rem;
  border-radius: 0.5rem;
  color: var(--first-color);
  transition: box-shadow 0.4s;
  font-weight: 600;

  :hover {
    box-shadow: var(--box-shadow-button);
  }
`;

export const HomeImage = styled("img")`
  top: 1rem;
  left: -0.8rem;
  position: relative;
  display: flex;
  justify-self: center;
  align-items: center;
  max-width: 100%;

  @media (max-width: 767px) {
    width: 89%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;
