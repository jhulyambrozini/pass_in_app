import { Link, Redirect } from 'expo-router';
import { Image, StatusBar, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '@/components/input';
import { Button } from '@/components/button';

import { useIndexViewModel } from './index-viewmodel';

import { colors } from '@/styles/colors';

import { useBadgeStore } from '@/infra/store/badge-store';

export default function Index() {
  const { handleAcessCredential, setCode, isLoading } = useIndexViewModel();
  const badgeStore = useBadgeStore();

  if (badgeStore.badge?.checkinUrl) {
    return <Redirect href="/ticket/ticket" />;
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

        <Button
          title="Acessar credencial"
          onPress={handleAcessCredential}
          isLoading={isLoading}
        />
        <Link
          className="text-gray-100 text-base font-bold text-center mt-8"
          href="/register/register"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
