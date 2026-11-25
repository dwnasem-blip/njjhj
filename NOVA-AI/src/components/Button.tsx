import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export default function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    };

    const sizeStyles = {
      small: { paddingVertical: 8, paddingHorizontal: 12, minHeight: 32 },
      medium: { paddingVertical: 12, paddingHorizontal: 20, minHeight: 44 },
      large: { paddingVertical: 16, paddingHorizontal: 24, minHeight: 56 },
    };

    const variantStyles = {
      primary: {
        backgroundColor: disabled ? colors.backgroundSelected : colors.primary,
      },
      secondary: {
        backgroundColor: disabled ? colors.backgroundSelected : colors.secondary,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: disabled ? colors.backgroundSelected : colors.primary,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      opacity: disabled ? 0.5 : 1,
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontSize: { small: 12, medium: 14, large: 16 }[size],
      fontWeight: '600',
      marginLeft: loading ? 8 : 0,
    };

    const variantTextStyles = {
      primary: { color: colors.textInvert },
      secondary: { color: colors.textInvert },
      outline: { color: colors.primary },
    };

    return { ...baseStyle, ...variantTextStyles[variant] };
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading && <ActivityIndicator size="small" color={variant === 'outline' ? colors.primary : colors.textInvert} />}
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
