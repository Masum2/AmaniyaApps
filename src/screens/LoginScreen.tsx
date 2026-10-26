import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';
import { Field } from '../components/ui';
import { useDemoAuth } from '../hooks/useDemoAuth';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('samia@example.com');
  const [password, setPassword] = useState('welcome123');
  const [show, setShow] = useState(false);
  const { login } = useDemoAuth();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleToggleShow = () => {
    setShow(!show);
  };

  const handleLogin = () => {
    login(email, password);
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Demo app',
      'Password recovery will be connected when the backend API is ready.'
    );
  };

  const handleContactProvider = () => {
    Alert.alert(
      'Contact your care team',
      'Ask your provider to help you access your client account.'
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      className="bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Top Gradient Header Section */}
        <LinearGradient
          colors={['#2A6B75', '#8AC6C2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
          className="pt-14 pb-16 px-6 relative"
        >
          {/* Back Button */}
          <TouchableOpacity
            onPress={handleGoBack}
            className="w-[42px] h-[42px] rounded-full bg-white/20 items-center justify-center mb-6"
          >
            <Ionicons name="arrow-back" size={20} color="#FFF" />
          </TouchableOpacity>

          {/* Header Content */}
          <View className="items-start">
            <View className="w-[64px] h-[64px] rounded-2xl bg-white/20 items-center justify-center mb-4">
              <Ionicons name="leaf" size={36} color="#FFF" />
            </View>
            <Text className="text-[32px] font-extrabold text-white tracking-tight">
              Welcome back
            </Text>
            <Text className="text-sm font-medium text-white/80 mt-2">
              Sign in to continue your wellness journey with MyAmaniya.
            </Text>
          </View>
        </LinearGradient>

        {/* Form Section */}
        <View className="flex-1 px-6 pt-8 pb-7 justify-between">
          <View>
            {/* Email Field */}
            <Field
              label="Email or phone"
              placeholder="Enter your email or phone"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              icon="mail-outline"
            />

            {/* Password Field */}
            <View className="relative mt-4">
              <Field
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!show}
                icon="lock-closed-outline"
              />
              <TouchableOpacity
                onPress={handleToggleShow}
                className="absolute right-4 top-[41px]"
              >
                <Ionicons
                  name={show ? 'eye-off-outline' : 'eye-outline'}
                  size={19}
                  color="#64748b"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={handleForgotPassword}
              className="self-end mt-2 mb-6"
            >
              <Text className="text-xs font-bold text-[#2A6B75]">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Actions (Button & Links pushed down) */}
          <View className="w-full mt-auto">
            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              className="w-full bg-[#2A6B75] rounded-2xl py-4 flex-row items-center justify-center shadow-sm"
              activeOpacity={0.8}
            >
              <Text className="text-white font-bold text-[16px] mr-2">Login</Text>
              <Ionicons name="arrow-forward" size={18} color="#FFF" />
            </TouchableOpacity>

            {/* Contact Provider */}
            <View className="flex-row justify-center mt-5">
              <Text className="text-xs text-slate-500">Need access? </Text>
              <TouchableOpacity onPress={handleContactProvider}>
                <Text className="text-xs font-extrabold text-[#2A6B75]">
                  Contact your provider
                </Text>
              </TouchableOpacity>
            </View>

            {/* Demo Notice */}
            <View className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex-row gap-2.5 items-start">
              <Ionicons
                name="shield-checkmark-outline"
                size={20}
                color="#2A6B75"
              />
              <Text className="flex-1 text-[11px] leading-[17px] text-slate-500">
                This is a demo sign-in. Any entered credentials open sample screens;
                no information is sent to a server.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;