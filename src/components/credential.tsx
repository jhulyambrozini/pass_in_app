import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { QRCode } from './qrcode';

type CredentialProps = {
  onchangeAvatar: () => void;
  onExpandeQRCode?: () => void;
  image?: string;
};

export function Credential({
  onchangeAvatar,
  image,
  onExpandeQRCode,
}: CredentialProps) {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        source={require('@/assets/ticket/band.png')}
        className="w-24 h-52 z-10"
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require('@/assets/ticket/header.png')}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite Summer</Text>
            <Text className="text-zinc-50 text-sm font-bold">#123</Text>
          </View>
          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {image ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onchangeAvatar}>
            <Image
              source={{ uri: image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center"
            onPress={onchangeAvatar}
          >
            <Feather name="camera" size={32} color={colors.green[400]} />
          </TouchableOpacity>
        )}

        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          Jhuly ambrozini
        </Text>
        <Text className="font-regular text-base text-zinc-300 mb-4">
          jhuly@email.com
        </Text>

        <QRCode value="TESANDO" size={120} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onExpandeQRCode}
          className="mt-6"
        >
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
