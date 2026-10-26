
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStackParamList } from './src/types/navigation';
import { colors } from './src/theme/colors';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainTabs from './src/navigation/MainTabs';
import DiagnosisScreen from './src/screens/DiagnosisScreen';
import RequestAppointmentScreen from './src/screens/RequestAppointmentScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import AppointmentDetailsScreen from './src/screens/AppointmentDetailsScreen';
import { DemoAuthProvider, useDemoAuth } from './src/hooks/useDemoAuth';
// @ts-expect-error Expo/Metro loads this stylesheet at runtime; TypeScript has no declaration for it.
import './global.css';
const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    text: colors.ink,
    border: colors.border,
    primary: colors.purple,
  },
};

const defaultHeaderOptions = {
  headerShown: true,
  headerShadowVisible: false,
  headerTintColor: colors.ink,
  headerStyle: { backgroundColor: colors.background },
  headerTitleStyle: { fontWeight: '700' },
} as const;

const RootNavigator = () => {
  const { isLoggedIn } = useDemoAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen
            name="Diagnosis"
            component={DiagnosisScreen}
            options={{
              ...defaultHeaderOptions,
              title: 'Diagnosis & Symptoms',
            }}
          />
          <Stack.Screen
            name="RequestAppointment"
            component={RequestAppointmentScreen}
            options={{
              ...defaultHeaderOptions,
              title: 'Request Appointment',
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              ...defaultHeaderOptions,
              title: 'Notifications',
            }}
          />
          <Stack.Screen
            name="AppointmentDetails"
            component={AppointmentDetailsScreen}
            options={{
              ...defaultHeaderOptions,
              title: 'Appointment Details',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <DemoAuthProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="dark" />
          <RootNavigator />
        </NavigationContainer>
      </DemoAuthProvider>
    </SafeAreaProvider>
  );
};

export default App;