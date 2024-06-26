import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

import { getAttendeeBadgeRepository } from '@/infra/repositories/attendee-badge-repository';
import { registerRepository } from '@/infra/repositories/register-repository';
import { useBadgeStore } from '@/infra/store/badge-store';

export function useRegisterViewModel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { save } = useBadgeStore();

  async function handlerRegister() {
    try {
      if (!name.trim() || !email.trim()) {
        return Alert.alert('inscrição', 'Preencha todos os campos!');
      }

      setIsLoading(true);

      const response = await registerRepository({ name, email });

      if (response.attendeeId) {
        const { data } = await getAttendeeBadgeRepository({
          attendeeId: response.attendeeId,
        });

        const dataBadge = {
          id: response.attendeeId,
          checkinUrl: data.badge.checkinUrl,
          email: data.badge.email,
          name: data.badge.name,
          eventTitle: data.badge.eventTitle,
        };

        save(dataBadge);
        Alert.alert('Incrição', 'Incrição realizada com sucesso!', [
          {
            text: 'OK',
            onPress: () => router.push('/ticket/ticket'),
          },
        ]);
      }
    } catch (error) {
      console.log(error);

      if (axios.isAxiosError(error)) {
        if (String(error.response?.data.message).includes('já cadastrado')) {
          return Alert.alert('Incrição', 'Este Email já esta cadastrado');
        } else if (
          String(error.response?.data.message).includes('número máximo')
        ) {
          return Alert.alert(
            'Incrição',
            'Esse evento já chegou no número máximo de participantes'
          );
        }
      }

      Alert.alert('Incrição', 'não foi possivel fazer a incrição');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    name,
    email,
    isLoading,
    setName,
    setEmail,
    handlerRegister,
  };
}
