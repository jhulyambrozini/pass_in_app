import { getAttendeeBadgeRepository } from '@/infra/repositories/attendee-badge-repository';
import { useBadgeStore } from '@/infra/store/badge-store';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';

export function useIndexViewModel() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = useBadgeStore();

  async function handleAcessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert('Ingreço', 'Informe o código da credencial');
      }

      setIsLoading(true);

      const { data } = await getAttendeeBadgeRepository({ attendeeId: code });

      const dataBadge = {
        id: code,
        checkinUrl: data.badge.checkinUrl,
        email: data.badge.email,
        name: data.badge.name,
        eventTitle: data.badge.eventTitle,
      };

      badgeStore.save(dataBadge);

      router.replace('/ticket/ticket');
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      Alert.alert('ingresso', 'ingresso não encontrado!');
    }
  }

  return {
    setCode,
    isLoading,
    handleAcessCredential,
  };
}
