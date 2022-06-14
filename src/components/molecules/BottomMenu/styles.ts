import styled, { css } from 'styled-components/native';

type TitleProps = {
  color: string;
};

type NotificationProps = {
  noNotifications: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 18px;

  ${({ theme, color }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${color};    
  `};
`;
