import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement logout
    router.replace('/(auth)/onboarding');
  };

  const menuItems = [
    { id: 'account', emoji: '⚙️', label: 'Account Settings' },
    { id: 'subscription', emoji: '⭐', label: 'Subscription' },
    { id: 'history', emoji: '📜', label: 'Usage History' },
    { id: 'notifications', emoji: '🔔', label: 'Notifications' },
    { id: 'language', emoji: '🌐', label: 'Language' },
    { id: 'help', emoji: '❓', label: 'Help & Support' },
    { id: 'about', emoji: 'ℹ️', label: 'About NOVA AI' },
  ];

  return (
    <GradientBackground>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Profile Header */}
          <Card style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>👤</Text>
            </View>
            <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
            <Text style={[styles.email, { color: colors.textSecondary }]}>john@example.com</Text>
            <View style={styles.badgeContainer}>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: colors.primary,
                  },
                ]}
              >
                <Text style={styles.badgeText}>✓ Free Plan</Text>
              </View>
            </View>
          </Card>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <StatItem label="Messages" value="45" colors={colors} />
            <StatItem label="Images" value="12" colors={colors} />
            <StatItem label="Days Used" value="8" colors={colors} />
          </View>

          {/* Menu Items */}
          <View style={styles.menuSection}>
            {menuItems.map((item) => (
              <TouchableOpacity key={item.id}>
                <Card style={[styles.menuItem, { borderBottomColor: colors.backgroundSelected } as any]}>
                  <View style={styles.menuContent}>
                    <Text style={styles.menuEmoji}>{item.emoji}</Text>
                    <Text style={[styles.menuLabel, { color: colors.text }]}>{item.label}</Text>
                  </View>
                  <Text style={[styles.menuArrow, { color: colors.textSecondary }]}>›</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </View>

          {/* Logout Button */}
          <Button
            title="Sign Out"
            variant="outline"
            size="large"
            onPress={handleLogout}
            style={styles.logoutButton}
          />

          <Text style={[styles.versionText, { color: colors.textSecondary }]}>
            NOVA AI v1.0.0
          </Text>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

function StatItem({
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
  profileHeader: {
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(109, 40, 217, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    fontSize: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    marginBottom: 16,
  },
  badgeContainer: {
    marginTop: 8,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  menuSection: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 0,
    borderRadius: 0,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuEmoji: {
    fontSize: 20,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
  },
  logoutButton: {
    marginBottom: 24,
    marginTop: 16,
  },
  versionText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 32,
  },
});
