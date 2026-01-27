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
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
  inputStyle,
  numberOfLines = 4,
}) => {
  return (
    <View style={[styles.container, style]}>
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
    borderRadius: 16,
    paddingVertical: 10,
    width: '100%',
  },
  input: {
    minHeight: 64,
    padding: 16,
    fontSize: 16,
    color: colors.black,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
});
