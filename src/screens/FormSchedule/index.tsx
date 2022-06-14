
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, TouchBox } from 'components/atoms/Box';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Header } from 'components/molecules/Header';
import { useAddData, useGetData } from 'hooks';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItemInfo, Platform } from 'react-native';
import { ScheduleNavigationProps } from 'routes/type';
import { useTheme } from 'styled-components';
import { ListService } from './interface';
import { Calendar, ClientName, Label, LabelService, OpenDatePickerButton, OpenDatePickerButtonText, Title } from './styles';

export function FormSchedule() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hour,setHour] = useState('');
  const [selectedService,setSelectedService] = useState('')
  const route = useRoute();
  const { name } = route.params as ScheduleNavigationProps;

  const {COLORS} = useTheme();
  const {data: dataService} = useGetData('services')
  const navigation = useNavigation();



  const {mutate} = useAddData({
    onSuccess: () => {
      navigation.navigate('Services')
    },
    onError: () => {
     alert('Erro ao cadastrar serviço, por favor tente novamente.')
    },
  })
  
  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(oldState => !oldState);
  }, []);

  const handleDateChange = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (date) {
      setSelectedDate(date);
    }
  }, []);

 function handleAdd(){
    mutate({
        collection:'schedule',
        data:selectedDate,
        hour,
        service:selectedService,
        name,
    })
 }


function renderItem({item}:ListRenderItemInfo<ListService>){
   return(
    <TouchBox 
    borderWidth={item?.name === selectedService ?4:1} 
    borderColor={COLORS.SECONDARY_900} 
    alignItems="center"
    justifyContent="center"
    borderRadius={10}
    onPress={()=>setSelectedService(item.name)}
    margin={1}
        
    >
        <LabelService>{item.name}</LabelService>
    </TouchBox>
   )
}

    return(
    <>
    <Header title="Serviço" goBack/>
         <Box backgroundColor={COLORS.PRIMARY_900} paddingX={16} paddingY={20} flex={1} justifyContent='space-between'>
         
        <Calendar>
            <Box>
                 <ClientName>{name}</ClientName>
            </Box>
                <Title>Escolha a Data</Title>
                <OpenDatePickerButton onPress={handleToggleDatePicker}>
                <OpenDatePickerButtonText>
                    {showDatePicker ? 'Recolher calendário' : 'Selecionar outra data'}
                </OpenDatePickerButtonText>
                </OpenDatePickerButton>

                {showDatePicker && (
                    <DateTimePicker
                    mode="date"
                    display={Platform.OS === 'android'? "calendar" : "inline"}
                    textColor="#f4ede8"
                    value={selectedDate}
                    onChange={handleDateChange}
                    themeVariant="dark"
                />
                
                )}
                <Box marginTop={20}>
                    <Label>Hora</Label>
                    <Input onChangeText={setHour} value={hour}/>
                </Box>
                <Box>
                    <Label>Serviço</Label>
                    {dataService?(
                    <FlatList
                    data={dataService}
                    keyExtractor={item=> item.name}
                    renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                        paddingBottom: 20,
                        }}
                    />):null}
                </Box>

            
            </Calendar>
            <Button
                title="Cadastrar"
                onPress={handleAdd}
                />
       
    </Box>
    </>
           
    )};