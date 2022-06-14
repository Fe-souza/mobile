import { shade } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, margin, padding, position } from 'styled-system';
import theme from 'theme';
import { BoxProps, TouchBoxProps } from './interfaces';




export const Box = styled.View<BoxProps>`
  ${flexbox};
  ${margin};
  ${padding};
  ${layout};
  ${color};
  ${border};
  ${position};
`;

export const TouchBox = styled(RectButton).attrs({
  android_ripple: {
    color: shade(0.3, theme.COLORS.PRIMARY_50),
  },
})<TouchBoxProps>`
  ${flexbox};
  ${margin};
  ${padding};
  ${layout};
  ${color};
  ${border};
  ${position};
`;
