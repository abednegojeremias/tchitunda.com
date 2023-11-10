import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--second-color);
`;

export const SectionTitle = styled("h1")`
  text-align: center;
  margin-bottom: 5rem;
  font-size: var(--h2-font-size);
`;

export const QuestionContainer = styled("div")`
  max-width: 800px;
  margin: 0 auto;
`;

export const QuestionData = styled("div")`
  border-bottom: 1px solid rgb(211, 211, 211);
`;

export const QuestionButton = styled("button")`
  width: 100%;
  background-color: var(--second-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
  border: none;
  outline: none;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;

export const QuestionTittle = styled("h2")`
  text-align: initial;
  font-size: var(--h3-font-size);
  font-family: var(--body-font);

  @media screen and (min-width: 320px) and (max-width: 425px) {
    font-size: var(--normal-font-size);
  }
`;

export const QuestionIcon = styled("i")`
  font-size: var(--biggest-font-size);
`;

export const QuestionDescriptions = styled("p")`
  font-size: var(--normal-font-size);
  max-height: 0;
  opacity: 0;
  line-height: 1.5;
  overflow: hidden;
  transition: all 0.6s ease;
  margin-bottom: 1.5rem;

  &.show {
    max-height: 500px;
    opacity: 1;
  }
`;
