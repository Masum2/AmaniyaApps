import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// আপনার থিমের কালার (প্রয়োজনে আপনার theme/colors ফাইল থেকে ইমপোর্ট করে নিতে পারেন)
const themeColors = {
  teal: '#2A6B75',
  tealLight: '#E6F4F1',
  ink: '#0f172a',
  muted: '#64748b',
  border: '#e2e8f0',
  surface: '#ffffff',
  background: '#f8fafc',
};

type ScreenProps = {
  children: React.ReactNode;
  padded?: boolean;
};

const Screen = ({ children, padded = true }: ScreenProps) => {
  return (
    <View className={`flex-1 bg-slate-50 ${padded ? 'px-5' : 'px-0'}`}>
      {children}
    </View>
  );
};

type HeadingProps = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
};

const Heading = ({ title, subtitle, right }: HeadingProps) => {
  return (
    <View className="flex-row items-center justify-between mb-[18px]">
      <View className="flex-1">
        <Text className="text-slate-900 text-[22px] font-extrabold tracking-tight">
          {title}
        </Text>
        {subtitle ? (
          <Text className="text-slate-500 text-[13px] mt-1.5">
            {subtitle}
          </Text>
        ) : null}
      </View>
      {right}
    </View>
  );
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <View className={`bg-white rounded-[20px] border border-slate-200 p-4 mb-3.5 ${className}`}>
      {children}
    </View>
  );
};

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: 'primary' | 'secondary';
};

const PrimaryButton = ({
  title,
  onPress,
  icon,
  variant = 'primary',
}: PrimaryButtonProps) => {
  const primary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className={`min-h-[52px] rounded-[15px] items-center justify-center flex-row gap-2.5 px-4 ${
        primary ? 'bg-[#2A6B75]' : 'bg-teal-50'
      }`}
    >
      <Text className={`text-[15px] font-bold ${primary ? 'text-white' : 'text-[#2A6B75]'}`}>
        {title}
      </Text>
      {icon ? (
        <Ionicons
          name={icon}
          size={18}
          color={primary ? '#fff' : '#2A6B75'}
        />
      ) : null}
    </TouchableOpacity>
  );
};

type FieldProps = TextInputProps & {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

const Field = ({ label, icon, ...props }: FieldProps) => {
  return (
    <View className="mb-4">
      <Text className="text-[13px] font-bold text-slate-900 mb-2">
        {label}
      </Text>
      <View className="min-h-[52px] border border-slate-200 rounded-[14px] bg-white flex-row items-center px-3.5">
        {icon ? (
          <Ionicons
            name={icon}
            size={18}
            color="#64748b"
            style={{ marginRight: 10 }}
          />
        ) : null}
        <TextInput
          placeholderTextColor="#A0A9BF"
          className="flex-1 text-slate-900 text-[14px] py-3"
          {...props}
        />
      </View>
    </View>
  );
};

type SectionTitleProps = {
  children: string;
  action?: string;
  onAction?: () => void;
};

const SectionTitle = ({ children, action, onAction }: SectionTitleProps) => {
  return (
    <View className="flex-row items-center justify-between mt-2 mb-3">
      <Text className="text-slate-900 text-[16px] font-extrabold">
        {children}
      </Text>
      {action && onAction ? (
        <TouchableOpacity onPress={onAction}>
          <Text className="text-[#2A6B75] font-bold text-xs">
            {action}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

type IconBubbleProps = {
  name: keyof typeof Ionicons.glyphMap;
  color?: string;
  bg?: string;
  size?: number;
};

const IconBubble = ({
  name,
  color = '#2A6B75',
  bg = '#E6F4F1',
  size = 44,
}: IconBubbleProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 3,
        backgroundColor: bg,
      }}
      className="items-center justify-center"
    >
      <Ionicons name={name} size={size * 0.46} color={color} />
    </View>
  );
};

type PillProps = {
  label: string;
  tone?: 'teal' | 'green' | 'orange' | 'blue';
};

const pillColors = {
  teal: ['bg-teal-50', 'text-[#2A6B75]'],
  green: ['bg-emerald-50', 'text-emerald-600'],
  orange: ['bg-orange-50', 'text-orange-700'],
  blue: ['bg-blue-50', 'text-blue-600'],
} as const;

const Pill = ({ label, tone = 'teal' }: PillProps) => {
  const [bgClass, textClass] = pillColors[tone];

  return (
    <View className={`px-2.5 py-1.5 rounded-full ${bgClass}`}>
      <Text className={`text-[11px] font-extrabold ${textClass}`}>
        {label}
      </Text>
    </View>
  );
};

export {
  Screen,
  Heading,
  Card,
  PrimaryButton,
  Field,
  SectionTitle,
  IconBubble,
  Pill,
};