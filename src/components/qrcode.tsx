import { colors } from '@/styles/colors';
import QRCodeSvg from 'react-native-qrcode-svg';

type QRCodeProps = {
  value: string;
  size: number;
};

export function QRCode({ size, value }: QRCodeProps) {
  return (
    <QRCodeSvg
      size={size}
      value={value}
      color={colors.white}
      backgroundColor="transparent"
    />
  );
}
