import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';
import { appointments } from '../data/mockData';
import { colors } from '../theme/colors';
import {
  Card,
  Heading,
  IconBubble,
  Pill,
  PrimaryButton,
} from '../components/ui';

const filters = ['Upcoming', 'Past', 'Completed'] as const;

const AppointmentsScreen = () => {
  const [filter, setFilter] = useState<typeof filters[number]>('Upcoming');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const shown = appointments.filter((a) =>
    filter === 'Upcoming' ? a.status === 'Upcoming' : a.status === 'Completed'
  );

  const handleAddPress = () => {
    navigation.navigate('RequestAppointment');
  };

  const handleAppointmentPress = (appointmentId: string) => {
    navigation.navigate('AppointmentDetails', { appointmentId });
  };

  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerStyle={{ padding: 20, paddingTop: 22, paddingBottom: 25 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Heading
        title="Appointments"
        subtitle="Your sessions, all in one place."
        right={
          <TouchableOpacity
            onPress={handleAddPress}
            className="w-11 h-11 rounded-[14px] bg-teal-50 items-center justify-center border border-teal-100"
          >
            <Ionicons name="add" size={23} color="#2A6B75" />
          </TouchableOpacity>
        }
      />

      {/* Filter Tabs - Fixed: Removed dynamic className and shadow-sm */}
      <View 
        className="flex-row p-1 rounded-[14px] mb-5"
        style={{ backgroundColor: 'rgba(226, 232, 240, 0.6)' }} // bg-slate-200/60 equivalent
      >
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            className="flex-1 items-center py-[11px] rounded-[11px]"
            style={{
              backgroundColor: filter === f ? '#fff' : 'transparent',
              // shadow-sm equivalent for condition
              ...(filter === f && {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 2,
              }),
            }}
          >
            <Text
              className="text-xs font-extrabold"
              style={{ color: filter === f ? '#2A6B75' : '#64748b' }}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Appointment Cards */}
      {shown.map((a) => (
        <TouchableOpacity
          key={a.id}
          activeOpacity={0.8}
          onPress={() => handleAppointmentPress(a.id)}
        >
          <Card>
            <View className="flex-row gap-3">
              <IconBubble
                name="calendar"
                bg={a.status === 'Upcoming' ? '#E5FAF5' : '#EAF1FF'}
                color={a.status === 'Upcoming' ? colors.tealDark : '#4C78D0'}
                size={48}
              />
              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm font-extrabold text-slate-900 flex-1 pr-2">
                    {a.title}
                  </Text>
                  <Pill
                    label={a.status}
                    tone={a.status === 'Upcoming' ? 'green' : 'blue'}
                  />
                </View>
                <Text className="text-xs text-slate-500 mt-2">
                  {a.date} · {a.time}
                </Text>
                <View className="flex-row items-center gap-1.5 mt-3">
                  <Ionicons
                    name="person-circle-outline"
                    size={17}
                    color={colors.muted}
                  />
                  <Text className="text-xs text-slate-600">
                    {a.therapist}
                  </Text>
                </View>
                <View className="flex-row items-center gap-1.5 mt-1.5">
                  <Ionicons
                    name="videocam-outline"
                    size={16}
                    color={colors.muted}
                  />
                  <Text className="text-xs text-slate-600">
                    {a.location}
                  </Text>
                </View>
              </View>
            </View>

            {/* Card Footer */}
            <View className="border-t border-slate-100 mt-4 pt-3 flex-row justify-between items-center">
              <Text className="text-xs font-extrabold text-[#2A6B75]">
                View appointment details
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#2A6B75" />
            </View>
          </Card>
        </TouchableOpacity>
      ))}

      {/* Empty State */}
      {shown.length === 0 && (
        <View className="items-center justify-center py-10">
          <Ionicons name="calendar-clear-outline" size={48} color="#cbd5e1" />
          <Text className="text-sm text-slate-400 mt-4 text-center">
            No appointments in this category.
          </Text>
        </View>
      )}

      {/* Request Button */}
      <PrimaryButton
        title="Request new appointment"
        icon="add"
        onPress={handleAddPress}
      />
      
      <Text className="text-[11px] text-slate-500 text-center mt-3 leading-4">
        Requests are for preferred dates and require provider confirmation.
      </Text>
    </ScrollView>
  );
};

export default AppointmentsScreen;