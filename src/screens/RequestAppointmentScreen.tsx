import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { Field, PrimaryButton } from '../components/ui';

const timeOptions = ['Morning', 'Afternoon', 'Any available time'];

const RequestAppointmentScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Any available time');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (!date.trim()) {
      Alert.alert(
        'Choose a preferred date',
        'Please enter the date that works best for you.'
      );
      return;
    }

    Alert.alert(
      'Request saved (demo)',
      'Your appointment request has been recorded in this demo only. Connect the backend API to submit it to your care team.',
      [{ text: 'Got it' }]
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 30 }}>
      {/* Header */}
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <View
          style={{
            width: 82,
            height: 82,
            borderRadius: 27,
            backgroundColor: colors.purpleLight,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="calendar-outline" size={39} color={colors.purple} />
        </View>
        <Text
          style={{
            fontSize: 21,
            fontWeight: '900',
            color: colors.ink,
            marginTop: 15,
          }}
        >
          Let's plan your next visit
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.muted,
            textAlign: 'center',
            lineHeight: 19,
            marginTop: 7,
          }}
        >
          Choose a preferred date and we'll pass your request to the care team.
        </Text>
      </View>

      {/* Info Banner */}
      <View
        style={{
          padding: 15,
          borderRadius: 16,
          backgroundColor: colors.mint,
          flexDirection: 'row',
          gap: 10,
          marginBottom: 20,
        }}
      >
        <Ionicons
          name="information-circle-outline"
          size={21}
          color={colors.tealDark}
        />
        <Text style={{ flex: 1, fontSize: 12, lineHeight: 18, color: '#387C78' }}>
          This is a request only, not a confirmed appointment. Your provider will
          contact you to confirm availability.
        </Text>
      </View>

      {/* Preferred Date */}
      <Field
        label="Preferred date"
        placeholder="e.g. Jan 22, 2025"
        value={date}
        onChangeText={setDate}
        icon="calendar-outline"
      />

      {/* Preferred Time */}
      <Text
        style={{
          fontSize: 13,
          fontWeight: '700',
          color: colors.ink,
          marginBottom: 9,
        }}
      >
        Preferred time
      </Text>
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 18 }}>
        {timeOptions.map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setTime(t)}
            style={{
              flex: 1,
              paddingVertical: 12,
              paddingHorizontal: 6,
              alignItems: 'center',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: time === t ? colors.purple : colors.border,
              backgroundColor: time === t ? colors.purpleLight : '#fff',
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: '800',
                color: time === t ? colors.purple : colors.muted,
              }}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Reason for Visit */}
      <Field
        label="Reason for visit (optional)"
        placeholder="Share anything you'd like your care team to know"
        value={reason}
        onChangeText={setReason}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      {/* Submit Button */}
      <PrimaryButton
        title="Submit request"
        icon="arrow-forward"
        onPress={handleSubmit}
      />
      <Text
        style={{
          fontSize: 11,
          color: colors.muted,
          textAlign: 'center',
          lineHeight: 17,
          marginTop: 13,
        }}
      >
        You will receive a notification after your provider reviews the request.
      </Text>
    </ScrollView>
  );
};

export default RequestAppointmentScreen;