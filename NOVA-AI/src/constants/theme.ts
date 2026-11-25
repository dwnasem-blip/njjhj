/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    // Primary gradients: Purple to Blue
    primary: '#6D28D9',
    secondary: '#3B82F6',

    // Text colors
    text: '#1F2937',
    textSecondary: '#6B7280',
    textInvert: '#FFFFFF',

    // Backgrounds
    background: '#F9FAFB',
    backgroundElement: '#F3F4F6',
    backgroundSelected: '#E5E7EB',

    // Gradients
    gradientStart: '#6D28D9',
    gradientEnd: '#3B82F6',

    // States
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#0EA5E9',
  },
  dark: {
    // Primary gradients: Purple to Blue
    primary: '#8B5CF6',
    secondary: '#60A5FA',

    // Text colors
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    textInvert: '#1F2937',

    // Backgrounds
    background: '#0F172A',
    backgroundElement: '#1E293B',
    backgroundSelected: '#334155',

    // Gradients
    gradientStart: '#8B5CF6',
    gradientEnd: '#60A5FA',

    // States
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#38BDF8',
  },
} as const;

export type Colors = typeof Colors.light;
export type ThemeColor = keyof Colors;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
