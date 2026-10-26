import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { Card, IconBubble, Pill } from '../components/ui';

const symptoms = [
  'Excessive worry',
  'Restlessness',
  'Difficulty concentrating',
  'Sleep disturbances',
  'Irritability',
];

const DiagnosisScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 28 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          marginBottom: 18,
        }}
      >
        <IconBubble name="heart" size={48} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: '900', color: colors.ink }}>
            Your care information
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, marginTop: 4 }}>
            Read-only · Provided by your care team
          </Text>
        </View>
      </View>

      {/* Primary Diagnosis */}
      <Card>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '800', color: colors.ink }}>
            Primary diagnosis
          </Text>
          <Pill label="ON FILE" tone="blue" />
        </View>

        <Text style={{ fontSize: 17, fontWeight: '800', color: colors.ink }}>
          Generalized Anxiety Disorder (GAD)
        </Text>
        <Text style={{ fontSize: 12, color: colors.muted, marginTop: 8 }}>
          Reference code: F41.1
        </Text>

        <View
          style={{ height: 1, backgroundColor: colors.border, marginVertical: 14 }}
        />

        <Text style={{ fontSize: 11, color: colors.muted }}>
          Diagnosis recorded
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: colors.ink,
            fontWeight: '700',
            marginTop: 4,
          }}
        >
          May 10, 2024
        </Text>
      </Card>

      {/* Common Symptoms */}
      <Text
        style={{
          fontSize: 17,
          fontWeight: '800',
          color: colors.ink,
          marginTop: 8,
          marginBottom: 12,
        }}
      >
        Common symptoms
      </Text>
      <Card>
        {symptoms.map((s, i) => (
          <View
            key={s}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingVertical: 11,
              borderBottomWidth: i === symptoms.length - 1 ? 0 : 1,
              borderBottomColor: colors.border,
            }}
          >
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: colors.teal,
              }}
            />
            <Text style={{ fontSize: 13, color: '#52617F' }}>{s}</Text>
          </View>
        ))}
      </Card>

      {/* Info Banner */}
      <View
        style={{
          padding: 15,
          borderRadius: 16,
          backgroundColor: colors.sky,
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <Ionicons name="information-circle-outline" size={21} color="#4279BC" />
        <Text style={{ flex: 1, fontSize: 12, lineHeight: 19, color: '#496B99' }}>
          This information is based on your initial assessment and is provided
          for your reference only. If you have questions or concerns, please
          discuss them with your care provider.
        </Text>
      </View>
    </ScrollView>
  );
};

export default DiagnosisScreen;