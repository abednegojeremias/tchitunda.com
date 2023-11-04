import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
margin-bottom: 4rem;
  @media screen and (min-width: 1023px) {
    display: flex;
    place-content: center;
  }
`;
export const NextProjects = styled("div")``;
export const NextProjectsContent = styled("div")`
  position: relative;
  background-color: var(--first-color);
  border-radius: 1rem;
  padding: 5rem 1rem 3rem;

  overflow: hidden;

  @media screen and (min-width: 320px) {
    padding: 6rem 1rem 2rem;
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: 2, 1fr;
    align-items: center;
    column-gap: 6rem;
    padding: 1.5rem;
    border-radius: 1rem;
    display: grid;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 314px 249px;
    display: grid;
    align-items: center;
    column-gap: 6rem;
    padding: 1.5rem;
    border-radius: 1rem;
    display: grid;
  }
`;

export const NextProjectsData = styled("div")`
  color: var(--second-color);
  @media screen and (min-width: 320px) and (max-width: 1022px) {
    text-align: center;
    margin-top: -4rem;
  }
`;
export const NextProjectsTitle = styled("h4")`
  font-size: 1.2em;
  font-weight: 300;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    font-size: var(--h3-font-size);
  }
`;
export const NextProjectsSubtitle = styled("h3")`
  font-size: 2.3rem;
  font-weight: 400;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 768px) {
    font-size: var(--biggest-font-size);
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
export const NextProjectsDescription = styled("h2")`
  font-size: var(--big-font-size);
  font-weight: 700 !important;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 4rem !important;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem !important;
  }
`;
export const NextProjectsButton = styled("a")`
  display: inline-block;
  background-color: var(--second-color);
  padding: 1.125rem 3rem;
  border-radius: var(--smaal-font-size);
  width: 100%;
  text-align: center;
  color: var(--first-color);
  transition: box-shadow 0.4s;
  font-weight: 600;

  :hover {
    box-shadow: var(--box-shadow-button);
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const NextProjectsImage = styled("img")`
  width: 123px;
  position: absolute;
  top: -1.5rem;
  left: -5rem;
  transform: rotate(30deg);

  @media screen and (min-width: 1024px) {
    width: 247px;
    position: initial;
    transform: none;
  }
`;
