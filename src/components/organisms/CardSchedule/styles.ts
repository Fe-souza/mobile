import { Box } from "components/atoms/Box";
import styled, { css } from "styled-components/native";

export const Container = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding:10px 20px;
  margin:30px 10px;
  ${({theme}) => css`
    background-color:${theme.COLORS.PRIMARY_900};
`};
`;

export const ContainerLeft = styled(Box)`
 justify-content: space-around;
`;

export const ContainerRight = styled(Box)`
  justify-content: space-between;
`;


export const Name = styled.Text`
font-size: 16px;
${({theme}) => css`
    font-family: ${theme.FONTS.TITLE};
    color:${theme.COLORS.SECONDARY_900};
`};
`;

export const Service = styled.Text`
font-size: 14px;
margin-top: 5px;
${({theme}) => css`
    font-family: ${theme.FONTS.TEXT};
    color:${theme.COLORS.SECONDARY_900};
`};
`;

export const Date = styled.Text`
font-size: 16px;
margin-top: 12px;
${({theme}) => css`
    font-family: ${theme.FONTS.TEXT};
    color:${theme.COLORS.SECONDARY_900};
`};
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin-right: 20px;
  position: absolute;
  bottom:30px;
  left:-70px;
  right: 5px;
`;