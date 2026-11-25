// User types
export interface User {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
  language: 'en' | 'ar';
  subscription: SubscriptionTier;
  createdAt: string;
  updatedAt: string;
}

// Subscription types
export type SubscriptionTier = 'free' | 'monthly_pro' | 'yearly_pro';

export interface Subscription {
  id: string;
  userId: string;
  tier: SubscriptionTier;
  startDate: string;
  endDate: string;
  isActive: boolean;
  renewsAutomatically: boolean;
}

// AI Chat types
export interface AIChat {
  id: string;
  userId: string;
  title: string;
  messages: Message[];
  aiPersonality?: 'general' | 'educator' | 'creative' | 'coder';
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  attachments?: string[];
}

// Image generation types
export interface ImageGenRequest {
  id: string;
  userId: string;
  prompt: string;
  style: string;
  imageUrl?: string;
  createdAt: string;
}

// Video generation types
export interface VideoGenRequest {
  id: string;
  userId: string;
  script: string;
  voiceType: 'male' | 'female';
  voiceLanguage: 'en' | 'ar';
  videoUrl?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
}

// Theme types
export interface Theme {
  colors: Record<string, string>;
  spacing: Record<string, number>;
  fonts: Record<string, string>;
}

// Navigation types
export interface NavigationRoute {
  name: string;
  title: string;
  icon: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
