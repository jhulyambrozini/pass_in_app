import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { useBadgeStore } from '@/infra/store/badge-store';

export function useTicketViewModel() {
  const [image, setImage] = useState('');
  const [expandQRCode, setExpandQRCode] = useState(false);

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Foto', 'Não foi possível selecionar a imagem');
    }
  }

  

  return {
    handleSelectImage,
    setExpandQRCode,

    image,
    expandQRCode,
  };
}