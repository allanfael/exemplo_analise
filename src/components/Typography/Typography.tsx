import React from 'react';
import { TextProps, TextStyle } from 'react-native';

import typography from '@themes/typography';
import colors from '@themes/theme';

import { Text } from './typography.styles';

interface TypographyProps extends TextProps {
  variant: keyof typeof typography;
  color?: keyof typeof colors;
  children?: any;
  style?: TextStyle;
}

const Typography = (props: TypographyProps) => {
  const { variant, children, color, style, ...restProps } = props;

  let styleSelected: TextStyle;

  styleSelected = {
    ...(typography[variant] as TextStyle),
  };

  if (color) {
    styleSelected.color = colors[color] as string;
  }

  return (
    <Text style={{ ...styleSelected, ...style }} {...restProps}>
      {children}
    </Text>
  );
};

export default Typography;
