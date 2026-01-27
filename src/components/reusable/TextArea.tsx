import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../utills';

interface TextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder,
  containerStyle,
  inputStyle,
  numberOfLines = 4,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline
        numberOfLines={numberOfLines}
        style={[styles.input, inputStyle]}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 16,
  },
  input: {
    height: 64,
    paddingVertical: 16,
    paddingHorizontal: 8,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
  },
});
