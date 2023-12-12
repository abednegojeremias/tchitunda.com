import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--sixth-color);
`;

export const Input = styled("input")`
  display: none;
`;

export const Header = styled("div")`
  max-width: 290px;
  margin-inline: auto;
  margin-bottom: 2rem;
`;

export const HeaderOptions = styled("header")`
  display: flex;
  position: relative;
  align-items: center;
  height: 55px;
  border: 1px solid var(--first-color);
  border-radius: 10px;
  max-width: 600px;
`;

export const Label = styled("label")`
  height: 100%;
  width: 40%;
  display: flex;
  z-index: 2;
  position: relative;
  font-size: var(--normal-font-size);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transform: all 0.3s ease;

  &:nth-child(2) {
    width: 50%;
  }
`;

export const Slider = styled("div")`
  position: absolute;
  height: 90%;
  border-radius: inherit;
  background: var(--first-color);
  transform: all 0.3s ease;
`;

export const SliderPlan1 = styled(Slider)`
  left: 0%;
  width: 90px;
  transform: translateX(5%);
`;

export const SliderPlan2 = styled(Slider)`
  left: 50%;
  width: 120px;
  transform: translateX(-50%);
`;

export const SliderPlan3 = styled(Slider)`
  left: 100%;
  width: 95px;
  transform: translateX(-105%);
`;

export const Cards = styled("div")`
  row-gap: 2rem;
  justify-content: center;
  padding-block: 1rem;
  display: grid;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 300px);
    gap: 1.5rem;
    display: grid;
  }
  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(1, 342px);
    gap: 1.5rem;
    display: grid;
  }

  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(1, 375px);
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

export const PlanContainer = styled("div")``;
export const PlanContent = styled("div")`
  border: 1px solid var(--first-color);
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 2rem 1.5rem 2.5rem;
  border-radius: var(--smaal-font-size);
  transition: 0.4s;

  @media screen and (min-width: 768px) {
    height: 83%;
  }
`;

export const CardsBox = styled("div")``;
export const CardsDetails = styled("div")`
  overflow: hidden;
`;

export const Box = styled("ul")`
  transition: all 0.3s ease;
`;
export const Box1 = styled("li")`
  margin-left: 0%;
`;

export const Box2 = styled("div")`
  margin-left: 0%;
`;

export const Box3 = styled("div")`
  margin-left: 0%;
`;

export const PricingDeatils = styled("div")`
  margin: 20px 0;

  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6e6;
`;

export const Span = styled("span")`
  font-size: 65px;
  font-weight: 600;
  position: relative;
`;
export const Month = styled("p")`
  font-size: 0.8rem;
  right: -50px;
  bottom: 17px;
  position: absolute;
  font-weight: 400;
`;
export const Subtitle = styled("h3")`
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: 2rem;
`;

export const Descriptions = styled("p")`
  font-size: 0.9rem;
  margin-top: 5px;
`;
export const Data = styled("article")`
  font-size: 15px;
  list-style: none;
  margin-bottom: 10px;
`;

export const Icon = styled("i")`
  color: var(--first-color);
`;
export const IconX = styled("i")`
  color: #656060;
`;

export const CardButton = styled("span")`
  border: 1px solid var(--first-color);
  border-radius: 0.5rem;
  display: inline-block;
  padding: 1.125rem 3rem;
  border-radius: var(--smaal-font-size);
  width: 100%;
  text-align: center;
  color: var(--first-color);
  transition: box-shadow 0.4s;
  font-weight: 600;

  :hover {
    color: var(--fifth-color);
  }
`;

export const Personalization = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 0.9rem;
  max-width: 1015px;
  margin-inline: 1.5rem;
  justify-content: space-between;
  padding: 1rem 1.7rem;
  background-color: var(--first-color);
  font-weight: 600;
  text-align: left;
  border-radius: var(--smaal-font-size);
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1152px) {
    margin-inline: auto;
  }
`;
export const PersalSpan = styled("span")`
  font-size: var(--h3-font-size);
  color: var(--second-color);

  @media screen and (min-width: 320px) and (max-width: 526px) {
    font-size: 1rem;
  }
`;
export const PersalLink = styled("a")`
  padding: 1.125rem 2rem;
  background-color: var(--second-color);
  color: var(--first-color);
  border-radius: 0.3rem;
  :hover {
    box-shadow: var(--box-shadow-button);
  }

  @media screen and (min-width: 320px) and (max-width: 526px) {
    font-size: 0.7rem;
    padding: 1.125rem 1rem;
  }
`;
