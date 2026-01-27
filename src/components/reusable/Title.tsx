import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { colors } from '../../utills';

interface TitleProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

export const Title: React.FC<TitleProps> = ({ style, title }) => {
  return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
});
