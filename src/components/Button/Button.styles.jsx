import styled from "styled-components";

export const BaseButton = styled.button`
  box-sizing: border-box;
  width: auto;
  letter-spacing: 0.5px;
  padding: 1.2rem 2.4rem;
  font-size: 15px;
  background-color: #fff;
  text-transform: uppercase;
  font-family: "Space Mono", monospace;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 100ms ease-out;
  border-radius: 8px;
  margin-bottom: 0.8rem;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const Done = styled(BaseButton)`
  background-color: #27ae60;
  color: #fff;
`;
