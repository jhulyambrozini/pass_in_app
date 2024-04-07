import { useState } from 'react';
import { Alert, Share } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useBadgeStore } from '@/infra/store/badge-store';

export function useTicketViewModel() {
  const [expandQRCode, setExpandQRCode] = useState(false);
  const { updateAvatar, remove, badge } = useBadgeStore();

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        updateAvatar(result.assets[0].uri);
        // setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Foto', 'Não foi possível selecionar a imagem');
    }
  }

  function logout() {
    remove();
  }

  async function handlerShare() {
    try {
      if (badge?.checkinUrl) {
        await Share.share({
          message: badge.checkinUrl,
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Compartilhar', 'Não foi possivel compartilhar');
    }
  }

  return {
    handleSelectImage,
    setExpandQRCode,
    handlerShare,
    expandQRCode,
    logout,
  };
}
