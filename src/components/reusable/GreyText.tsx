import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { colors } from '../../utills';

interface GreyTextProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

export const GreyText: React.FC<GreyTextProps> = ({ style, title }) => {
  return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});
