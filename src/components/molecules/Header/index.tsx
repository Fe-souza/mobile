import { useNavigation } from '@react-navigation/native';
import { Box } from 'components/atoms/Box';
import { ButtonBack } from 'components/atoms/ButtonBack';
import React from 'react';
import { HeaderProps } from './interface';
import { Container, Title } from './styles';

export function Header({title,goBack=false}:HeaderProps){
    const navigation = useNavigation();
    return (

        <Container>
            {goBack?( <ButtonBack onPress={()=> navigation.goBack()}/>):<Box/>}
            <Title>
              {title}
            </Title>
            <Box/>

        </Container>
    )
}