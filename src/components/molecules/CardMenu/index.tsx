import { MaterialIcons } from '@expo/vector-icons';
import { Box, TouchBox } from 'components/atoms/Box';
import React from 'react';
import { useTheme } from 'styled-components';
import { CardMenuProps } from './interface';
import { Title } from './styles';


export function CardMenu({ title, iconLeft,iconRight,onPress }: CardMenuProps) {
const { COLORS } = useTheme()

  return (
    <TouchBox
    onPress={onPress}
    flexDirection='row'
    backgroundColor={COLORS.PRIMARY_900} 
    padding={10} 
    marginY={10}
    borderRadius={10}
    alignItems='center'
    justifyContent='space-between'
    >
      <Box flexDirection='row'>
        {iconLeft ?  <MaterialIcons name={iconLeft} size={24} color={COLORS.SECONDARY_900} /> : null}
          <Title color={COLORS.SECONDARY_900} >{title}</Title>
      </Box>
      {iconRight ?  <MaterialIcons name={iconRight} size={24} color={COLORS.SECONDARY_900} /> : null}
    </TouchBox>
  )
}