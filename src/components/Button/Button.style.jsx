import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.style.background};
  border-radius: 0.25rem;
  border: none;
  color: ${(props) => props.style.color};
  cursor: pointer;
  padding: 1rem;
`;
