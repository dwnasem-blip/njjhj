import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  elevated?: boolean;
}

export default function Card({ children, style, onPress, elevated = true }: CardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const cardStyle: ViewStyle = {
    backgroundColor: colors.backgroundElement,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: elevated ? 4 : 2 },
    shadowOpacity: elevated ? 0.15 : 0.08,
    shadowRadius: elevated ? 8 : 4,
    elevation: elevated ? 5 : 2,
  };

  return (
    <View style={[cardStyle, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
