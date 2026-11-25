// App name and version
export const APP_NAME = 'NOVA AI';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.novaai.app';
export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY || '';

// Feature limits (free tier)
export const FREE_TIER_LIMITS = {
  dailyAIChats: 5,
  dailyImageGen: 3,
  dailyVideoGen: 1,
  storageGB: 1,
};

// Language support
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  ar: 'العربية',
};

// Tool categories
export const AI_TOOLS = {
  chatbot: { id: 'chatbot', nameAr: 'المساعد الذكي', nameEn: 'AI Chatbot' },
  imageGen: { id: 'imageGen', nameAr: 'إنشاء الصور', nameEn: 'Image Generation' },
  videoGen: { id: 'videoGen', nameAr: 'تحويل النص لفيديو', nameEn: 'Text to Video' },
  writing: { id: 'writing', nameAr: 'الكتابة الذكية', nameEn: 'Smart Writing' },
  voice: { id: 'voice', nameAr: 'الصوت الذكي', nameEn: 'Smart Voice' },
  education: { id: 'education', nameAr: 'التعليم الذكي', nameEn: 'Smart Education' },
};

// Subscription tiers
export const SUBSCRIPTION_TIERS = {
  free: { id: 'free', nameAr: 'مجاني', nameEn: 'Free' },
  monthlyPro: { id: 'monthly_pro', nameAr: 'Premium شهري', nameEn: 'Monthly Pro' },
  yearlyPro: { id: 'yearly_pro', nameAr: 'Premium سنوي', nameEn: 'Yearly Pro' },
};

// Animation durations (ms)
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
};
