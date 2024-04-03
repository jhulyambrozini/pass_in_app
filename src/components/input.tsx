import { colors } from '@/styles/colors';
import { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 p-3">
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.gray[200]}
      className="flex-1 text-white text-base font-regular"
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
