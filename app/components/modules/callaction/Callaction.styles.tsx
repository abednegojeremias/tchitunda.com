import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--first-color);
  @media screen and (min-width: 1023px) {
    display: flex;
    place-content: center;
  }
`;
export const CallAction = styled("div")`
  margin: 0 auto;
`;

export const CallActionContent = styled("div")`
  position: relative;
  padding: 1rem 1rem 2rem;
  overflow: hidden;
`;

export const CallActionData = styled("div")`
  color: var(--second-color);
  text-align: center;
  max-width: 600px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
  text-align: center;
`;

export const CallActionTitle = styled("h3")`
  font-size: var(--h1-font-size);
  margin-bottom: 1.5rem;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const CallActionSubtitle = styled("h3")``;

export const CallActionDescription = styled("p")`
  margin-bottom: 2rem;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CallActionButton = styled("a")`
  display: inline-block;
  background-color: var(--second-color);
  padding: 1.125rem 3rem;
  border-radius: var(--smaal-font-size);
  width: 50%;
  text-align: center;
  color: var(--first-color);
  transition: box-shadow 0.4s;
  font-weight: 600;

  :hover {
    box-shadow: var(--box-shadow-button);
  }
  
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 67%;
  }
`;
