
import { useNavigation } from '@react-navigation/native';
import { Box } from 'components/atoms/Box';
import { CardMenu } from 'components/molecules/CardMenu';
import { Header } from 'components/molecules/Header';
import { useAuth } from 'hooks/auth';
import React from 'react';


export function More() {
    const navigation = useNavigation();
    const {signOut} = useAuth()
    return(
    <>
        <Header title="Mais"/>
        <Box paddingX={16}>
            <CardMenu 
            onPress={ () => navigation.navigate('Services')}
            iconLeft='local-offer'
            title='Serviços' 
            iconRight='arrow-forward-ios'
            />

            <CardMenu 
            onPress={ () => navigation.navigate('FormSchedule', {name:'Felipe'})}
            iconLeft='local-offer'
            title='Agendamento' 
            iconRight='arrow-forward-ios'
            />

            <CardMenu 
            onPress={ () => signOut()}
            iconLeft='power-settings-new'
            title='Sair' 
            />
            
        </Box>
       
    </>
    )
}
