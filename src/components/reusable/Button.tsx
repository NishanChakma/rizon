import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { colors } from '../../utills';

interface ButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  bgColor?: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  textStyle,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 48,
    backgroundColor: colors.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});
