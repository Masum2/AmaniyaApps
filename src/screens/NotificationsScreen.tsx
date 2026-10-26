import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { Card, IconBubble } from '../components/ui';

const items = [
  {
    icon: 'calendar-outline' as const,
    title: 'Upcoming appointment',
    body: 'Your next appointment is on Jan 15, 2025 at 10:00 AM.',
    when: 'Today · 9:00 AM',
    bg: colors.mint,
    color: colors.tealDark,
  },
  {
    icon: 'checkmark-circle-outline' as const,
    title: 'Appointment request update',
    body: 'Your appointment request has been received. Your provider will confirm the date.',
    when: 'Yesterday',
    bg: colors.purpleLight,
    color: colors.purple,
  },
  {
    icon: 'document-text-outline' as const,
    title: 'New progress note',
    body: 'A new progress note is available in your care records.',
    when: '2 days ago',
    bg: colors.sky,
    color: '#4279BC',
  },
];

const NotificationsScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 28 }}>
      {/* Header Banner */}
      <View
        style={{
          padding: 17,
          backgroundColor: colors.purpleLight,
          borderRadius: 18,
          marginBottom: 18,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
        }}
      >
        <IconBubble name="notifications" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, fontWeight: '800', color: colors.ink }}>
            You're all caught up
          </Text>
          <Text style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>
            Important updates from your care team appear here.
          </Text>
        </View>
      </View>

      {/* Notification Cards */}
      {items.map((n, i) => (
        <Card key={n.title}>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
            <IconBubble name={n.icon} bg={n.bg} color={n.color} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: '800', color: colors.ink }}>
                {n.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#5D6A88',
                  lineHeight: 19,
                  marginTop: 7,
                }}
              >
                {n.body}
              </Text>
              <Text style={{ fontSize: 10, color: colors.muted, marginTop: 10 }}>
                {n.when}
              </Text>
            </View>
            {i === 0 ? (
              <View
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: colors.teal,
                }}
              />
            ) : null}
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default NotificationsScreen;