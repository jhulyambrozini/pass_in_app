import { Alert, Image, StatusBar, Text, View } from 'react-native';
import { Input } from '@/components/input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Button } from '@/components/button';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function Index() {
  const [code, setCode] = useState('');

  function handleAcessCredential() {
    if (!code.trim()) {
      return Alert.alert('Ingreço', 'Informe o código da credencial');
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />
      <StatusBar barStyle="light-content" />

      <Image
        source={require('@/assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            onChangeText={setCode}
            placeholder="Código do ingresso"
          />
        </Input>

        <Button title="Acessar credencial" onPress={handleAcessCredential} />
        <Link
          className="text-gray-100 text-base font-bold text-center mt-8"
          href="/register"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
