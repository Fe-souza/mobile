import { Box } from "components/atoms/Box";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Container = styled(Box)`
width:100%;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:${getStatusBarHeight()+33}px 20px 20px;
${({theme}) => css`
    background-color:${theme.COLORS.PRIMARY_900};
`};
`;


export const Title = styled.Text`
font-size: 24px;
${({theme}) => css`
    font-family: ${theme.FONTS.TITLE};
    color:${theme.COLORS.TITLE};
`};
`;
