import "../../../globals.css";
import { styled } from "@mui/system";

export const Footers = styled("div")`
  max-width: 1305px;
  position: relative;
  width: 100%;
  height: auto;
  padding: 70px 50px;
  line-height: 30px;

  @media screen and (min-width: 1440px) {
    margin-inline: auto;
  }

  @media screen and (max-width: 991px) {
    padding: 30px;
  }
`;

export const FooterContainer = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 991px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;

export const FooterContent = styled("div")``;
export const FooterData = styled("div")``;
export const LogoImage = styled("div")``;

export const Image = styled("img")`
  height: 40px;
  width: 160px;
`;
export const FooterCards = styled("div")``;
export const FooterTitle = styled("h3")``;

export const FooterDescriptions = styled("p")`
  padding: 10px 48px 20px 0px;
`;

export const FooterSM = styled("ul")`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 70px);
`;

export const FooterLink = styled("a")`
  display: inline-block;
  width: 45px;
  height: 45px;
  background: var(--first-color);
  align-content: center;
  display: grid;
  justify-content: center;
  border-radius: 0.5rem;
  color: var(--second-color);
`;

export const I = styled("i")`
  font-size: 2rem;
`;

export const CardTitle = styled("h3")`
  margin-bottom: 1rem;
`;

export const CardList = styled("li")`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CardDescriptions = styled("a")`
  color: var(--fifth-color);
  display: inline-block;
`;

export const FooterCopyRightText = styled("p")`
  width: 100%;
  text-align: center;
  color: #555;
`;

