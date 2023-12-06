import "../../../globals.css";
import { styled } from "@mui/system";

export const Section = styled("section")`
  background-color: var(--sixth-color);
  @media screen and (min-width: 1023px) {
    display: grid;
    place-content: center;
  }
`;

export const ContactContent = styled("div")`
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
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 708px);
    gap: 1.5rem;
    display: grid
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
export const ContactOptions = styled("div")``;
export const ContactOption = styled("article")`
  background-color: var(--first-color);
  border-radius: 0.5rem;
  padding: 20px 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: -0.1rem;
  margin-left: -0.1rem;
  transition: border 0.4s;
  margin-bottom: 1rem;

  :hover {
    box-shadow: 0 8px 24px rgb(167, 61, 234);
  }
`;

export const ContactIcon = styled("i")`
color: var(--second-color);
font-size: 3rem;
text-align: center;
`;
export const ContactTitle = styled("h4")`
color: var(--second-color);
`;

export const ContactSubtitle = styled("h5")`
color: var(--second-color);
`;
export const ContactDescriptions = styled("a")`
color: #520d7df4;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  grid: 1.2rem;
`;
export const Label = styled("label")`
  font-size: var(--normal-font-size);
  font-weight: 500;
`;
export const Span = styled("span")`
  color: var(--first-color);
  font-weight: bold;
`;
export const Textearea = styled("textarea")`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: var(--second-color);
  /* border: 2px solid var(--first-color); */
  resize: none;

  ::placeholder {
    font-weight: 500;
  }
`;
export const Input = styled("input")`
  margin-bottom: 1rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: var(--second-color);
  /* border: 2px solid var(--first-color); */
  resize: none;
  ::placeholder {
    font-weight: 500;

  }
`;

export const InputButton = styled("input")`
  display: inline-block;
  width: 100%;
  background-color: var(--first-color);
  padding: 1.125rem 3rem;
  border-radius: var(--smaal-font-size);
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
  color: var(--second-color);
  transition: box-shadow 0.4s;
  cursor: pointer;
  font-weight: 600;
  border: none;
  :hover {
    box-shadow: var(--box-shadow-button);
  }
`;
