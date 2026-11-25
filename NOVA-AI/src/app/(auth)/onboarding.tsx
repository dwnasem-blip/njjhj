import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import Button from '@/components/Button';
import GradientBackground from '@/components/GradientBackground';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function OnboardingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <GradientBackground>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={[styles.emoji, styles.largeEmoji]}>🚀</Text>
            <Text style={[styles.title, { color: colors.text }]}>NOVA AI</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Your Personal AI Assistant
            </Text>
          </View>

          {/* Features Section */}
          <View style={styles.featuresSection}>
            <FeatureCard
              emoji="💬"
              title="Smart Chat"
              description="Have intelligent conversations with AI assistants"
              colors={colors}
            />
            <FeatureCard
              emoji="🎨"
              title="Create Images"
              description="Generate stunning images from text descriptions"
              colors={colors}
            />
            <FeatureCard
              emoji="🎥"
              title="Make Videos"
              description="Convert text to engaging video content"
              colors={colors}
            />
            <FeatureCard
              emoji="✍️"
              title="Smart Writing"
              description="Write better articles, emails, and stories"
              colors={colors}
            />
          </View>

          {/* CTA Section */}
          <View style={styles.ctaSection}>
            <Link href="/(auth)/login" asChild>
              <Button
                title="Sign In"
                variant="primary"
                size="large"
                style={styles.button}
                onPress={() => {}}
              />
            </Link>
            <Link href="/(auth)/signup" asChild>
              <Button
                title="Create Account"
                variant="outline"
                size="large"
                style={styles.button}
                onPress={() => {}}
              />
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
  colors,
}: {
  emoji: string;
  title: string;
  description: string;
  colors: any;
}) {
  return (
    <View
      style={[
        styles.featureCard,
        {
          backgroundColor: colors.backgroundElement,
          borderColor: colors.primary,
        },
      ]}
    >
      <Text style={styles.featureEmoji}>{emoji}</Text>
      <Text style={[styles.featureTitle, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  emoji: {
    marginBottom: 16,
  },
  largeEmoji: {
    fontSize: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  featuresSection: {
    gap: 12,
    marginBottom: 40,
  },
  featureCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  featureEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  ctaSection: {
    gap: 12,
  },
  button: {
    minHeight: 56,
  },
});
