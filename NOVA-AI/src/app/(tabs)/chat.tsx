import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GradientBackground from '@/components/GradientBackground';
import Card from '@/components/Card';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    // TODO: Send message to AI backend
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a placeholder response. Connect to AI backend.',
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 500);
  };

  return (
    <GradientBackground>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}
          keyboardVerticalOffset={80}
        >
          {/* Messages List */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scrollContent, { paddingBottom: 20 }]}
          >
            {messages.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyEmoji}>💬</Text>
                <Text style={[styles.emptyTitle, { color: colors.text }]}>Start a Conversation</Text>
                <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
                  Ask me anything and I'll help you out!
                </Text>
              </View>
            ) : (
              <View style={styles.messagesContainer}>
                {messages.map((message) => (
                  <View
                    key={message.id}
                    style={[
                      styles.messageWrapper,
                      message.role === 'user' ? styles.userMessage : styles.assistantMessage,
                    ]}
                  >
                    <Card
                      style={[
                        styles.messageBubble,
                        {
                          backgroundColor:
                            message.role === 'user' ? colors.primary : colors.backgroundElement,
                        } as any,
                      ] as any}
                    >
                      <Text
                        style={[
                          styles.messageText,
                          {
                            color:
                              message.role === 'user'
                                ? colors.textInvert
                                : colors.text,
                          },
                        ]}
                      >
                        {message.content}
                      </Text>
                    </Card>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>

          {/* Input Area */}
          <View style={[styles.inputArea, { borderTopColor: colors.backgroundSelected, backgroundColor: colors.background }]}>
            <View
              style={[
                styles.inputContainer,
                {
                  backgroundColor: colors.backgroundElement,
                  borderColor: colors.primary,
                },
              ]}
            >
              <TextInput
                style={[
                  styles.input,
                  {
                    color: colors.text,
                  },
                ]}
                placeholder="Type your message..."
                placeholderTextColor={colors.textSecondary}
                value={input}
                onChangeText={setInput}
                multiline
                editable={!loading}
              />
              <TouchableOpacity
                style={[
                  styles.sendButton,
                  {
                    backgroundColor: colors.primary,
                    opacity: input.trim() && !loading ? 1 : 0.5,
                  },
                ]}
                onPress={handleSendMessage}
                disabled={!input.trim() || loading}
              >
                <Text style={styles.sendIcon}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  emptyEmoji: {
    fontSize: 50,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  messagesContainer: {
    gap: 12,
  },
  messageWrapper: {
    marginVertical: 6,
  },
  userMessage: {
    alignItems: 'flex-end',
  },
  assistantMessage: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  inputArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderWidth: 1.5,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingRight: 4,
    paddingVertical: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 14,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
