import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AI_TOOLS } from '@/constants';

export default function ToolsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const tools = Object.values(AI_TOOLS);

  return (
    <GradientBackground>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>AI Tools</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Explore all available AI features
            </Text>
          </View>

          {/* Tools Grid */}
          <View style={styles.toolsContainer}>
            {tools.map((tool) => (
              <TouchableOpacity key={tool.id} style={styles.toolCardWrapper}>
                <Card style={styles.toolCard}>
                  <View style={styles.toolContent}>
                    <Text style={styles.toolEmoji}>
                      {tool.id === 'chatbot'
                        ? '💬'
                        : tool.id === 'imageGen'
                          ? '🎨'
                          : tool.id === 'videoGen'
                            ? '🎥'
                            : tool.id === 'writing'
                              ? '✍️'
                              : tool.id === 'voice'
                                ? '🎤'
                                : '📚'}
                    </Text>
                    <Text style={[styles.toolName, { color: colors.text }]}>
                      {tool.nameEn}
                    </Text>
                    <Text style={[styles.toolDesc, { color: colors.textSecondary }]}>
                      {getToolDescription(tool.id)}
                    </Text>
                    <View
                      style={[
                        styles.badge,
                        {
                          backgroundColor: colors.primary,
                        },
                      ]}
                    >
                      <Text style={styles.badgeText}>Try Now</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

function getToolDescription(toolId: string): string {
  const descriptions: Record<string, string> = {
    chatbot: 'Have intelligent conversations with AI',
    imageGen: 'Generate stunning images from text',
    videoGen: 'Create videos from text descriptions',
    writing: 'Write better content with AI assistance',
    voice: 'Transform text to speech and vice versa',
    education: 'Learn and create educational content',
  };
  return descriptions[toolId] || 'Explore this AI tool';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 24,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  toolCardWrapper: {
    width: '48%',
  },
  toolCard: {
    padding: 16,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolContent: {
    alignItems: 'center',
  },
  toolEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  toolName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  toolDesc: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 16,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
