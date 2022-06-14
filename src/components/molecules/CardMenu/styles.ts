import styled, { css } from "styled-components/native";

type TitleProps = {
    color: string;
  };
  
export const Title = styled.Text<TitleProps>`
  font-size: 18px;
  margin-left: 10px;

  ${({ theme, color }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${color};    
  `};
`;