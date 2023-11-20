import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--sixth-color);
  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;
