import React from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../types/navigation';
import { appointments } from '../data/mockData';
import { colors } from '../theme/colors';
import { Card, IconBubble, Pill, PrimaryButton } from '../components/ui';

const AppointmentDetailsScreen = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, 'AppointmentDetails'>>();

  const appointment =
    appointments.find((x) => x.id === route.params?.appointmentId) ||
    appointments[0];

  const sessionInfoRows = [
    {
      icon: 'person-outline' as const,
      label: 'Care provider',
      value: appointment.therapist,
    },
    {
      icon: 'videocam-outline' as const,
      label: 'Location',
      value: appointment.location,
    },
    {
      icon: 'calendar-outline' as const,
      label: 'Date & time',
      value: `${appointment.date}, ${appointment.time}`,
    },
  ];

  const handleReschedule = () => {
    Alert.alert(
      'Reschedule',
      'Use Request Appointment to submit a preferred new date.'
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 28 }}>
      {/* Header */}
      <View style={{ alignItems: 'center', paddingVertical: 22 }}>
        <IconBubble
          name="calendar"
          size={76}
          bg={colors.mint}
          color={colors.tealDark}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: '900',
            color: colors.ink,
            marginTop: 16,
          }}
        >
          {appointment.title}
        </Text>

        <View style={{ marginTop: 10 }}>
          <Pill
            label={appointment.status}
            tone={appointment.status === 'Upcoming' ? 'green' : 'blue'}
          />
        </View>

        <Text style={{ fontSize: 13, color: colors.muted, marginTop: 10 }}>
          {appointment.date} · {appointment.time}
        </Text>
      </View>

      {/* Session Information */}
      <Card>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '800',
            color: colors.ink,
            marginBottom: 14,
          }}
        >
          Session information
        </Text>

        {sessionInfoRows.map((row, index) => (
          <View
            key={row.label}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingVertical: 13,
              borderBottomWidth: index === sessionInfoRows.length - 1 ? 0 : 1,
              borderBottomColor: colors.border,
            }}
          >
            <IconBubble name={row.icon} size={38} />
            <View>
              <Text style={{ fontSize: 11, color: colors.muted }}>
                {row.label}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: colors.ink,
                  fontWeight: '700',
                  marginTop: 4,
                }}
              >
                {row.value}
              </Text>
            </View>
          </View>
        ))}
      </Card>

      {/* Info Banner */}
      <View
        style={{
          padding: 15,
          backgroundColor: colors.sky,
          borderRadius: 16,
          flexDirection: 'row',
          gap: 10,
          marginBottom: 18,
        }}
      >
        <Ionicons name="information-circle-outline" size={21} color="#4279BC" />
        <Text style={{ flex: 1, fontSize: 12, lineHeight: 19, color: '#496B99' }}>
          Please contact your care team if you need to reschedule or have
          questions about this session.
        </Text>
      </View>

      {/* Reschedule Button */}
      <PrimaryButton
        title="Request a different date"
        icon="calendar-outline"
        onPress={handleReschedule}
      />
    </ScrollView>
  );
};

export default AppointmentDetailsScreen;