import { Image, StatusBar, Text, View } from 'react-native';
import { Input } from '@/components/input';
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Button } from '@/components/button';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />
      <StatusBar barStyle="light-content" />

      <Image
        source={require('@/assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />

      <View>
        <Input>
          <FontAwesome name="user-circle" color={colors.green[200]} size={20} />
          <Input.Field placeholder="Nome completo" />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="E-mail" keyboardType="email-address" />
        </Input>

        <Button title="Realizar inscrição" />
        <Link
          className="text-gray-100 text-base font-bold text-center mt-8"
          href="/"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
