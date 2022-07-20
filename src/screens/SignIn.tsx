import { View, Text } from 'react-native';
import { NativeBaseProvider } from "native-base";

export function SignIn(){
  return (
    <NativeBaseProvider>
      <Text>Olá, Paulo.</Text>
    </NativeBaseProvider>
  )
}