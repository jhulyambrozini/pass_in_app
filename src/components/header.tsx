import { View, Text } from 'react-native';

type headerProps = {
  title: string;
};

export function Header({ title }: headerProps) {
  return (
    <View className="w-full h-28 items-end flex-row bg-black/20 px-8 pb-4 border-b border-white/10">
      <Text className="flex-1 text-white font-medium text-lg text-center">
        {title}
      </Text>
    </View>
  );
}
