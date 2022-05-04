import styled from "styled-components";

export const Block = styled.div`
  background: ${(props) => props.style.background};
  color: ${(props) => props.style.color};
  padding: 1rem;
`;
