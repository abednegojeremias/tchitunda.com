import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--second-color);
  margin-bottom: 4rem;
`;

export const ClienTitle = styled("section")`
  margin-bottom: 5rem;
  color: var(--fifth-color);
  font-size: var(--big-font-size);
  text-align: center;
`;

export const ClientData = styled("div")`
  grid-template-columns: repeat(3, 180px);
  column-gap: 2rem;
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

export const ClientBox = styled("div")`
  background-color: var(--seconnd-color);
  border-radius: 0.5rem;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: -0.1rem;
  margin-left: -0.1rem;
  transition: border 0.4s;
`;

export const ClientLogo = styled("img")`
  max-width: 100%;
  max-height: 100%;
`;
