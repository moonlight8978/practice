import React from 'react'
import { TextInput as RNTextInput, TextInputProps } from 'react-native'

interface Props extends TextInputProps {}

export default function TextInput({ style, ...rest }: Props) {
  return (
    <RNTextInput
      {...rest}
      style={[{ borderBottomWidth: 1, borderBottomColor: 'black', marginBottom: 10, height: 30 }, style]}
    />
  )
}
