import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--second-color);
`;

export const PlanContainer = styled("div")`
  row-gap: 2rem;
  justify-content: center;
  padding-block: 1rem;
  display: grid;

  
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 290px);
    gap: 1.5rem;
    display: grid;
  }

  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(1, 330px);
    gap: 1.5rem;
    display: grid;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 352px);
    gap: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 310px);
    gap: 1.5rem;
    row-gap: 3rem;
    padding-block: 2.5rem 4rem;
  }
  @media screen and (min-width: 1040px) {
    grid-template-columns: repeat(3, 320px);
    gap: 1.5rem;
    row-gap: 3rem;
    padding-block: 2.5rem 4rem;
  }
`;
export const PlanContent = styled("article")`
  position: relative;
  background-color: #fff;
  padding: 2rem 1.5rem 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.318);
  transition: 0.4s;

  :hover {
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.318);
  }
`;
export const CardHeader = styled("div")``;

export const CardMonth = styled("div")`
  color: #8415c9;
`;
export const CardPrice = styled("span")`
  font-size: 2rem;
`;
export const CardPricing = styled("div")``;
export const CardButton = styled("a")`
  display: inline-block;
  background-color: var(--first-color);
  padding: 1.125rem 3rem;
  border-radius: var(--smaal-font-size);
  width: 100%;
  text-align: center;
  color: var(--second-color);
  transition: box-shadow 0.4s;
  font-weight: 600;

  :hover {
    box-shadow: var(--box-shadow-button);
  }
`;
export const CardTitle = styled("h1")`
  font-size: 2rem;
`;
export const CardSubtitle = styled("h4")`
 
`;
export const CardIcon = styled("i")`
  font-size: 2rem;
  margin-right: 0.5rem;
  color: #8415c9;
`;
export const CardDescription = styled("p")``;
