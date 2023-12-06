import "../../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--second-color);
  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;
export const DetailHomes = styled("div")`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr !important;
  }

  @media screen and (min-width: 1023px) {
    grid-template-columns: 440px 440px !important;
    align-items: center;
    column-gap: 6rem;
  }

  @media screen and (min-width: 1040px) {
    grid-template-columns: 430px 430px !important;
    align-items: center;
    column-gap: 8rem;
  }
  @media screen and (min-width: 1260px) {
    grid-template-columns: 400px 470px !important;
    column-gap: 10rem;
  }
`;
export const DetailData = styled("div")`
  @media screen and (min-width: 320px) {
    margin-bottom: 2rem;
  }
`;

export const DetailTitle = styled("h3")`
  font-size: var(--h3-font-size);
  color: var(--first-color);
  margin-bottom: 1.5rem;
  border-left: 10px solid var(--first-color);
  padding-left: 20px;

  

`;

export const DetailSubtitle = styled("h2")`
  margin-bottom: 1rem;
`;

export const DetailDescription = styled("p")`
  margin-bottom: 2rem;
`;

export const DetailButton = styled("span")`
  display: inline-block;
  background-color: var(--first-color);
  padding: 1.125rem 3rem;
  border-radius: var(--smaal-font-size);
  margin-bottom: 2rem;
  text-align: center;
  color: var(--second-color);
  transition: box-shadow 0.4s;
  font-weight: 600;

  :hover {
    box-shadow: var(--box-shadow-button);
  }
`;

export const DetailStapsIcon = styled("span")`
  color: var(--first-color);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: rgb(132, 21, 201);
  padding: 7px 15px;
  border-radius: 0.2rem;
  color: var(--second-color);
`;
export const DataStaps = styled("div")`
  display: grid;
  align-items: center;
  column-gap: 0.8rem;
  grid-template-columns: min-content 1fr;
`;
export const DetailStapsTitle = styled("h3")`
  color: var(--fifth-color);
`;

export const DetailStapsDescription = styled("p")`
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    display: grid;
  }
`;

export const HR = styled("hr")`
  max-width: 25%;
  margin-top: 4rem;
  border: 1px solid var(--first-color);
`;
