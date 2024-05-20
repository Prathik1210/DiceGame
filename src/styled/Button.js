import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 200px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

export const OutlineButton = styled(Button)`

  color: black;
  background: #ffffff;
  border: 1px solid transparent;
  border: solid;

    &:hover {
    background-color: black;
    border: 1px solid white;
    color: white;
  }
`;
