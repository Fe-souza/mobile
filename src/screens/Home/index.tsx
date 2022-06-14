import { useNavigation } from '@react-navigation/native';
import { CardSchedule } from 'components/organisms/CardSchedule';
import { useGetData } from 'hooks';
import { useAuth } from 'hooks/auth';
import React from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Greeting, GreetingText,
  Header
} from './styles';


export function Home() {
  const navigation = useNavigation();
  const {data} = useGetData('schedule')
  const { user } = useAuth();
  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingText>Olá, {user?.name || 'Usuário'} seja bem vindo.</GreetingText>
        </Greeting>

      </Header>
      {data?(<FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardSchedule {...item}/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24
        }}
      />):null}
      
     
    </Container>
  );
}
