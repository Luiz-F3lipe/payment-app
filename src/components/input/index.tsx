import { TextInput, TextInputProps} from "react-native"

import { styles } from "@/components/input/styles";

export function Input({style, ...rest }: TextInputProps) {
  return <TextInput style={[styles.input, style]} {...rest} />
}