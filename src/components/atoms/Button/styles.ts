import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type: TypeProps;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  ${({ theme,type }) => css`
      background-color: ${type === 'primary' ? 'transparent': theme.COLORS.PRIMARY_800};

      border-width: ${type === 'primary' ?'1px': 0};
      border-color:${type === 'primary' ?theme.COLORS.SECONDARY_900: theme.COLORS.PRIMARY_800};
  `}
 
`;

export const Title = styled.Text<ContainerProps>`
  font-size: 14px;

  ${({ theme, type }) => css`
    color: ${type === 'primary' ? theme.COLORS.SECONDARY_900: theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
}))``;
