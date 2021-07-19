import React from 'react';
import BaseText from './Base/textBase';

const Text = ({ children, size, textStyle, ...others }) => (
  <BaseText size={size} textStyle={textStyle} {...others}>
    {children}
  </BaseText>
);

export default Text;
