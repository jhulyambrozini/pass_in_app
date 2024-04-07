import { Image, StatusBar, View } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { useRegisterViewModel } from './register-viewmodel';

import { Input } from '@/components/input';
import { Button } from '@/components/button';

import { colors } from '@/styles/colors';

export default function Register() {
  const { handlerRegister, isLoading, setEmail, setName } =
    useRegisterViewModel();

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image
        source={require('@/assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome name="user-circle" color={colors.green[200]} size={20} />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>

        <Button
          title="Realizar inscrição"
          onPress={handlerRegister}
          isLoading={isLoading}
        />
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
