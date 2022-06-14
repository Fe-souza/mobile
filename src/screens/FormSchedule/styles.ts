import { Box } from "components/atoms/Box";
import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export const Calendar = styled(Box)``;

export const ClientName = styled.Text`
  margin: 0 24px 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
  font-size: 24px;
`;

export const Title = styled.Text`
  margin: 0 24px 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
  font-size: 16px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  ${({ theme }) => css`
  background: ${theme.COLORS.SECONDARY_900};
  `}
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
 ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
  `}
  font-size: 16px;
  color: #232129;
`;

export const Schedule = styled(Box)`
  padding: 24px 0 16px;
`;

export const Section = styled(Box)`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #999591;
  margin: 0 24px 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const LabelService = styled.Text`
  font-size: 16px;
  padding: 10px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;