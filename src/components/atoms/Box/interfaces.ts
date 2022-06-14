import { PressableProps } from 'react-native';
import {
  BordersProps, ColorProps, FlexboxProps, LayoutProps, MarginProps,
  PaddingProps, PositionProps
} from 'styled-system';


export type BoxProps = FlexboxProps &
  MarginProps &
  PaddingProps &
  ColorProps &
  LayoutProps &
  BordersProps &
  PositionProps;

export type TouchBoxProps = BoxProps & PressableProps;
