import { TextProps } from 'react-native';
import { ColorProps, MarginProps, PaddingProps, TypographyProps } from 'styled-system';



export type BaseTextProps = TextProps & ColorProps & MarginProps & PaddingProps & TypographyProps;

export type MobileTextProps = {
  size?: number;
  bold?: boolean;
} & BaseTextProps;

