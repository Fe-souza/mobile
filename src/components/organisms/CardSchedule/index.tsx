import React from "react";
import { CardScheduleProps } from './interface';
import { Container, ContainerLeft, ContainerRight, Date, Image, Name, Service } from "./styles";
export function CardSchedule({
    name,
    service,
    date,
    uri,
}:CardScheduleProps){
    
    return(
        <Container>
            <ContainerLeft>
                <Name>{name}</Name>
                <Service>{service}</Service>
                <Date>{date}</Date>
                
            </ContainerLeft>
            <ContainerRight>
                <Image source={{ uri:uri}} />
            </ContainerRight>
        </Container>
    )
}