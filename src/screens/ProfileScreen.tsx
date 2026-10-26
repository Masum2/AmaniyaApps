import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useDemoAuth } from '../hooks/useDemoAuth';
import { client } from '../data/mockData';
import { colors } from '../theme/colors';
import { Card, Heading, IconBubble, PrimaryButton } from '../components/ui';

const rows = [
  {
    icon: 'calendar-outline' as const,
    label: 'Date of birth',
    value: client.dob,
  },
  {
    icon: 'call-outline' as const,
    label: 'Phone number',
    value: client.phone,
  },
  {
    icon: 'mail-outline' as const,
    label: 'Email address',
    value: client.email,
  },
  {
    icon: 'location-outline' as const,
    label: 'Home address',
    value: client.address,
  },
];

const accountRows = [
  { icon: 'lock-closed-outline' as const, label: 'Privacy & security' },
  { icon: 'help-circle-outline' as const, label: 'Help & support' },
  { icon: 'information-circle-outline' as const, label: 'About Amaniya' },
];

const ProfileScreen = () => {
  const { logout } = useDemoAuth();

  const handleRequestUpdate = () => {
    Alert.alert(
      'Profile update',
      'Profile editing will be connected to your provider API later.'
    );
  };

  const handleAccountRowPress = (label: string) => {
    Alert.alert(label, 'This demo section will be connected in a future release.');
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 20, paddingTop: 22, paddingBottom: 30 }}
    >
      <Heading title="My profile" subtitle="Your personal information." />

      {/* Profile Card */}
      <Card style={{ alignItems: 'center', paddingVertical: 24 }}>
        <View
          style={{
            width: 86,
            height: 86,
            borderRadius: 30,
            backgroundColor: '#E5ECFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 13,
          }}
        >
          <Ionicons name="person" size={44} color="#6684D6" />
        </View>
        <Text style={{ fontSize: 20, fontWeight: '900', color: colors.ink }}>
          {client.fullName}
        </Text>
        <Text style={{ fontSize: 12, color: colors.muted, marginTop: 5 }}>
          Client ID: {client.clientId}
        </Text>
        <View
          style={{
            marginTop: 15,
            backgroundColor: colors.mint,
            paddingHorizontal: 13,
            paddingVertical: 7,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <Ionicons name="shield-checkmark" size={14} color={colors.success} />
          <Text
            style={{ fontSize: 11, fontWeight: '800', color: colors.success }}
          >
            Active client
          </Text>
        </View>
      </Card>

      {/* Personal Details */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '800',
          color: colors.ink,
          marginBottom: 12,
        }}
      >
        Personal details
      </Text>
      <Card>
        {rows.map((r, i) => (
          <View
            key={r.label}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 12,
              paddingVertical: 13,
              borderBottomWidth: i === rows.length - 1 ? 0 : 1,
              borderBottomColor: colors.border,
            }}
          >
            <IconBubble name={r.icon} size={38} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11, color: colors.muted, marginBottom: 4 }}>
                {r.label}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: colors.ink,
                  fontWeight: '600',
                  lineHeight: 19,
                }}
              >
                {r.value}
              </Text>
            </View>
          </View>
        ))}
      </Card>

      {/* Request Profile Update */}
      <TouchableOpacity
        onPress={handleRequestUpdate}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: 15,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: '#fff',
          marginBottom: 18,
        }}
      >
        <Ionicons name="create-outline" size={18} color={colors.purple} />
        <Text style={{ fontSize: 13, fontWeight: '800', color: colors.purple }}>
          Request profile update
        </Text>
      </TouchableOpacity>

      {/* Account Section */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '800',
          color: colors.ink,
          marginBottom: 12,
        }}
      >
        Account
      </Text>
      <Card style={{ paddingVertical: 4 }}>
        {accountRows.map((r) => (
          <TouchableOpacity
            key={r.label}
            onPress={() => handleAccountRowPress(r.label)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <Ionicons name={r.icon} size={20} color={colors.muted} />
            <Text
              style={{ flex: 1, fontSize: 13, fontWeight: '700', color: colors.ink }}
            >
              {r.label}
            </Text>
            <Ionicons name="chevron-forward" size={17} color={colors.muted} />
          </TouchableOpacity>
        ))}
      </Card>

      {/* Sign Out */}
      <PrimaryButton
        title="Sign out"
        variant="secondary"
        icon="log-out-outline"
        onPress={logout}
      />
      <Text
        style={{
          fontSize: 10,
          color: colors.muted,
          textAlign: 'center',
          marginTop: 14,
        }}
      >
        Amaniya · Client app demo v1.0.0
      </Text>
    </ScrollView>
  );
};

export default ProfileScreen;