import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../types/navigation';
import { appointments, notes } from '../data/mockData';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const next = appointments[0];

  const quickOverviewItems = [
    {
      icon: 'checkmark-done-outline' as const,
      label: 'Past sessions',
      value: '3 completed',
      bg: 'bg-blue-50',
      color: '#5085CF',
    },
    {
      icon: 'calendar-outline' as const,
      label: 'Upcoming',
      value: '1 scheduled',
      bg: 'bg-teal-50',
      color: '#2A6B75',
    },
    {
      icon: 'add-circle-outline' as const,
      label: 'Need support?',
      value: 'Request visit',
      bg: 'bg-orange-50',
      color: '#C9852C',
    },
  ];

  const handleQuickOverviewPress = (index: number) => {
    if (index === 2) {
      navigation.navigate('RequestAppointment');
    } else {
      navigation.navigate('MainTabs');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-slate-50"
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 }}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <View>
          <Text className="text-[11px] font-bold text-slate-500 tracking-wider">
            WEDNESDAY, JANUARY 15
          </Text>
          <Text className="text-2xl font-extrabold text-slate-900 mt-1">
            Hello, Samia <Text>🌿</Text>
          </Text>
          <Text className="text-sm text-slate-500 mt-1">
            You're doing great. Keep going.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          className="w-12 h-12 rounded-2xl bg-white border border-slate-200 items-center justify-center shadow-sm"
        >
          <Ionicons name="notifications-outline" size={22} color="#0f172a" />
          <View className="absolute right-3 top-3 w-2 h-2 rounded-full bg-[#2A6B75] border border-white" />
        </TouchableOpacity>
      </View>

      {/* Next Appointment Card */}
      <View className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-7">
        {/* Top Teal Section */}
        <View className="bg-[#2A6B75] p-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-lg bg-white/20 items-center justify-center">
                <Ionicons name="calendar-outline" size={16} color="#fff" />
              </View>
              <Text className="text-[12px] text-white font-bold tracking-wide">
                NEXT APPOINTMENT
              </Text>
            </View>
            <View className="bg-white/20 px-2.5 py-1 rounded-full">
              <Text className="text-[10px] text-white font-bold">UPCOMING</Text>
            </View>
          </View>

          <Text className="text-xl text-white font-extrabold mt-4">
            {next.date}
          </Text>
          <Text className="text-sm text-teal-50 mt-1 font-medium">
            {next.time}  ·  {next.title}
          </Text>
        </View>

        {/* Bottom White Section */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AppointmentDetails', { appointmentId: next.id })
          }
          className="p-4 flex-row items-center justify-between bg-white"
        >
          <View>
            <Text className="text-sm text-slate-900 font-bold">
              {next.therapist}
            </Text>
            <Text className="text-xs text-slate-500 mt-1">
              {next.location}
            </Text>
          </View>

          <View className="flex-row items-center gap-1">
            <Text className="text-xs text-[#2A6B75] font-bold">
              View details
            </Text>
            <Ionicons name="arrow-forward" size={14} color="#2A6B75" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Quick Overview */}
      <Text className="text-lg font-bold text-slate-900 mb-3">Quick overview</Text>
      <View className="flex-row gap-3 mb-7">
        {quickOverviewItems.map((item, index) => (
          <TouchableOpacity
            key={item.label}
            onPress={() => handleQuickOverviewPress(index)}
            className="flex-1 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm"
          >
            <View className={`w-8 h-8 rounded-lg ${item.bg} items-center justify-center mb-3`}>
              <Ionicons name={item.icon} size={18} color={item.color} />
            </View>
            <Text className="text-[10px] text-slate-500 font-semibold">
              {item.label}
            </Text>
            <Text className="text-xs text-slate-900 font-bold mt-1">
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Progress */}
      <Text className="text-lg font-bold text-slate-900 mb-3">Recent progress</Text>
      <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-7">
        <View className="flex-row gap-3 items-start">
          <View className="w-10 h-10 rounded-xl bg-teal-50 items-center justify-center">
            <Ionicons name="leaf-outline" size={20} color="#2A6B75" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-slate-900">
              {notes[0].type}
            </Text>
            <Text className="text-[11px] text-slate-500 mt-1">
              {notes[0].date}
            </Text>
            <Text className="text-xs leading-5 text-slate-600 mt-2">
              {notes[0].body}
            </Text>
          </View>
        </View>
      </View>

      {/* Explore Your Care */}
      <Text className="text-lg font-bold text-slate-900 mb-3">Explore your care</Text>
      <View className="flex-row gap-3">
        <TouchableOpacity
          onPress={() => navigation.navigate('Diagnosis')}
          className="flex-1 bg-purple-50 rounded-2xl p-4 border border-purple-100"
        >
          <Ionicons name="heart-outline" size={24} color="#7c3aed" />
          <Text className="font-bold text-slate-900 mt-3 text-sm">
            My diagnosis
          </Text>
          <Text className="text-[11px] text-slate-500 mt-1">
            View your care info
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('RequestAppointment')}
          className="flex-1 bg-blue-50 rounded-2xl p-4 border border-blue-100"
        >
          <Ionicons name="calendar-clear-outline" size={24} color="#2563eb" />
          <Text className="font-bold text-slate-900 mt-3 text-sm">
            Request a visit
          </Text>
          <Text className="text-[11px] text-slate-500 mt-1">
            Choose a preferred date
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}