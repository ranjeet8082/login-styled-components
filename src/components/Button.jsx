import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  background: ${(p) => (p.variant === "primary" ? "#f8049c" : "#fdd54f")};
  font-weight: bold;
  border-radius: 4px;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  cursor: pointer;

  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.3em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  &:disabled {
    background: #eee;
    color: #666;
  }
`;
