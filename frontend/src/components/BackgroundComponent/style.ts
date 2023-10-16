import styled from "styled-components";

type BackgroundComponentProps = {
  bgColor: string;
  height: string;
};

export const BackgroundComponent = styled.div<BackgroundComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  min-height: ${({ height }) => height};
`;
