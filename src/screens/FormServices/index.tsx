
import { useNavigation } from '@react-navigation/native';
import { Box } from 'components/atoms/Box';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Header } from 'components/molecules/Header';
import { useAddData } from 'hooks';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Label } from './styles';

export function FormServices() {
    const {COLORS} = useTheme();
    const [name,setName] = useState('');
    const [price,setPrice] = useState('')
    const navigation = useNavigation();

    const {mutate} = useAddData({
      onSuccess: () => {
        navigation.navigate('Services')
      },
      onError: () => {
       alert('Erro ao cadastrar serviço, por favor tente novamente.')
      },
    })

    function handleAdd(){
      mutate({
        name,
        price,
        collection:'services'
      })
    }
    return(
        <>
         <Header title="Serviço" goBack/>
         <Box backgroundColor={COLORS.PRIMARY_900} paddingX={16} paddingY={20} flex={1} justifyContent='space-between'>      
              <Box>
                <Box>
                  <Label>Nome</Label>
                  <Input onChangeText={setName} value={name}/>
                </Box>
                <Box>
                  <Label>Preço</Label>
                  <Input onChangeText={setPrice} value={price} keyboardType="numeric"/>
                </Box>
              </Box>

              <Button
                title="Cadastrar"
                onPress={handleAdd}
              />
              
         </Box>
        </>
        
    )
}


