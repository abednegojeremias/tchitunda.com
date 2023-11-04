import "../../../globals.css";
import { styled } from "@mui/system";

export const Section =  styled("section")`
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
export const SectionTitle =  styled("h3")``;
export const SectionSubtitle =  styled("h3")``;
export const SectionDescription =  styled("p")``;
export const PortfolioContainer = styled("div")`
  row-gap: 2rem;
  justify-content: center;
  padding-block: 1rem;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 352px);
    gap: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 300px);
    gap: 1.5rem;
    row-gap: 3rem;
    padding-block: 2.5rem 4rem;
  }
`;
export const PortfolioCards = styled("div")`
 position: relative;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
  :hover {
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.508);
  }
`;
export const PortfolioImage = styled("img")`
  width: 100%;
  height: 100%;
`;
export const PortfolioModel = styled("div")`
  position: absolute;
  left: 0;
  bottom: -100%;
  width: 100%;
  height: 100%;
  color: #fff;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(263, 50%, 40%, 0.8) 120%
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: bottom 1s;
  display: flex;
`;
export const PortfolioTitle = styled("div")`
 margin-bottom: 0.75rem;
`;
export const PortfolioSubtitle = styled("div")`
  display: block;
  margin-bottom: 0.25rem;
`;

export const PortfolioDescriptions = styled("p")``;

