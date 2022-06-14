import styled, { css } from "styled-components/native";

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;