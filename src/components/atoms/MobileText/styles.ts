import styled from 'styled-components/native';
import { color, margin, padding, typography } from 'styled-system';

import { BaseTextProps } from './interfaces';

export const BaseText = styled.Text<BaseTextProps>`
  ${color};
  ${margin};
  ${padding};
  ${typography};
`;
