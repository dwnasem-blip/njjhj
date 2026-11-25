import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AI_TOOLS } from '@/constants';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const tools = Object.values(AI_TOOLS).slice(0, 3);

  return (
    <GradientBackground>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.greeting, { color: colors.text }]}>Welcome to NOVA AI</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Your AI-powered assistant for everything
            </Text>
          </View>

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            <StatCard label="Today's Uses" value="2/5" colors={colors} />
            <StatCard label="Chats" value="12" colors={colors} />
            <StatCard label="Images" value="5" colors={colors} />
          </View>

          {/* Featured Tools */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Tools</Text>
            <View style={styles.toolsGrid}>
              {tools.map((tool) => (
                <TouchableOpacity key={tool.id} style={styles.toolCardWrapper}>
                  <Card style={styles.toolCard}>
                    <View style={styles.toolContent}>
                      <Text style={styles.toolEmoji}>
                        {tool.id === 'chatbot'
                          ? '💬'
                          : tool.id === 'imageGen'
                            ? '🎨'
                            : '🎥'}
                      </Text>
                      <Text style={[styles.toolName, { color: colors.text }]}>
                        {tool.nameEn}
                      </Text>
                      <Text style={[styles.toolDesc, { color: colors.textSecondary }]}>
                        {tool.id === 'chatbot'
                          ? 'Chat with AI'
                          : tool.id === 'imageGen'
                            ? 'Generate images'
                            : 'Create videos'}
                      </Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Recent Activity */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activity</Text>
            <Card>
              <View style={styles.activityItem}>
                <Text style={[styles.activityTitle, { color: colors.text }]}>No recent activity</Text>
                <Text style={[styles.activityDesc, { color: colors.textSecondary }]}>
                  Start using NOVA AI to see your activity here
                </Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

function StatCard({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: any;
}) {
  return (
    <Card style={styles.statCard}>
      <Text style={[styles.statValue, { color: colors.primary }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{label}</Text>
    </Card>
  );
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
  greeting: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  toolsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  toolCardWrapper: {
    flex: 1,
  },
  toolCard: {
    padding: 12,
    alignItems: 'center',
  },
  toolContent: {
    alignItems: 'center',
  },
  toolEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  toolName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  toolDesc: {
    fontSize: 12,
    textAlign: 'center',
  },
  activityItem: {
    alignItems: 'center',
    padding: 16,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  activityDesc: {
    fontSize: 14,
  },
});
