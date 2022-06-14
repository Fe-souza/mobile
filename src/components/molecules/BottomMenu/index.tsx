import React from 'react';
import { BottomMenuProps } from './interface';
import { Container, Title } from './styles';

export function BottomMenu({ title, color }: BottomMenuProps) {

  return (
    <Container>
      <Title color={color}>{title}</Title>
    </Container>
  )
}