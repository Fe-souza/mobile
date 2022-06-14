import React from 'react';
import { useTheme } from 'styled-components/native';
import { MobileTextProps } from './interfaces';
import { BaseText } from './styles';



export function MobileText({
  size = 14,
  bold,
  children,
  ...rest
}: MobileTextProps){
  const { FONTS, COLORS } = useTheme();

  let fontFamily = FONTS.TEXT;

  if (bold) {
    fontFamily = FONTS.TITLE;
  }

  return (
    <BaseText
      color={COLORS.SECONDARY_900}
      fontFamily={fontFamily}
      fontWeight={bold ? '900' :'normal'}
      {...rest}
    >
      {children}
    </BaseText>
  );
}
