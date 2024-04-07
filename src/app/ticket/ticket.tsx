import { MotiView } from 'moti';
import { Redirect } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { Credential } from '@/components/credential';
import { Button } from '@/components/button';
import { Header } from '@/components/header';
import { QRCode } from '@/components/qrcode';

import { useTicketViewModel } from './ticket-viewmodel';

import { colors } from '@/styles/colors';

import { useBadgeStore } from '@/infra/store/badge-store';

export default function Ticket() {
  const {
    expandQRCode,
    handleSelectImage,
    setExpandQRCode,
    logout,
    handlerShare,
  } = useTicketViewModel();

  const { badge } = useBadgeStore();

  if (!badge?.checkinUrl) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential
          onchangeAvatar={handleSelectImage}
          onExpandeQRCode={() => setExpandQRCode(true)}
          data={badge}
        />

        <MotiView
          from={{ translateY: 0 }}
          animate={{ translateY: 10 }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 700,
          }}
        >
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={colors.gray[300]}
            className="self-center my-6"
          />
        </MotiView>
        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>
        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar do evento {badge.eventTitle}!
        </Text>
        <Button title="Compartilhar" onPress={handlerShare} />
        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-10"
          onPress={logout}
        >
          <Text className="text-base text-white font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setExpandQRCode(false)}
          >
            <QRCode value="TEST" size={300} />
            <Text className="mt-10 font-body text-orange-500 text-lg text-center">
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
