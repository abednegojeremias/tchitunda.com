import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--sixth-color);
  @media screen and (min-width: 320px) {
    padding: 20px;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;
export const Services = styled("div")`
  padding-block: 4rem;
  display: grid;
`;
export const ServiceContainer = styled("div")`
  max-width: 1120px;
  row-gap: 1.5rem;
  gap: 2rem;
  display: grid;
  margin-bottom: 7rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
export const ServiceCard = styled("div")`
  background-color: var(--second-color);
  border-radius: 0.5rem;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: -0.1rem;
  margin-left: -0.1rem;
  transition: border 0.4s;

  :hover {
    box-shadow: 0 8px 24px rgb(167, 61, 234);
  }
`;
export const ServiceTitle = styled("h2")`
  margin-bottom: 1rem;
  font-size: 1rem;
`;
export const ServicesDescription = styled("p")``;
export const Image = styled("img")`
  margin-bottom: 1rem;
  border-radius: 7px;
  padding: 10px;
  width: 50px;
  height: 50px;
  background-color: var(--first-color);
  font-size: 0.5rem;
`;

export const SectionTitle = styled("h2")``;
export const SectionSubtitle = styled("h3")``;
export const SectionDescription = styled("p")``;
