import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { notes } from '../data/mockData';
import { colors } from '../theme/colors';
import { Card, Heading, IconBubble, Pill } from '../components/ui';

const tabs = ['Progress Notes', 'Case Notes'] as const;

const NotesScreen = () => {
  const [tab, setTab] = useState<'Progress Notes' | 'Case Notes'>('Progress Notes');

  const filteredNotes = notes.filter((n) =>
    tab === 'Progress Notes' ? n.type === 'Progress Note' : n.type === 'Case Note'
  );

  return (
    <ScrollView
      contentContainerStyle={{ padding: 20, paddingTop: 22, paddingBottom: 24 }}
    >
      <Heading title="Progress & notes" subtitle="A record of your care journey." />

      {/* Tab Switcher */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#EDEFF7',
          padding: 4,
          borderRadius: 14,
          marginBottom: 20,
        }}
      >
        {tabs.map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setTab(t)}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 11,
              borderRadius: 11,
              backgroundColor: tab === t ? '#fff' : 'transparent',
              elevation: tab === t ? 2 : 0,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: '800',
                color: tab === t ? colors.purple : colors.muted,
              }}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Banner */}
      <View
        style={{
          padding: 15,
          borderRadius: 17,
          backgroundColor: colors.purpleLight,
          flexDirection: 'row',
          gap: 11,
          marginBottom: 18,
        }}
      >
        <Ionicons name="lock-closed-outline" size={20} color={colors.purple} />
        <Text style={{ flex: 1, fontSize: 12, lineHeight: 18, color: '#605A9B' }}>
          These notes are shared by your care team for your reference. You can
          view them here, but cannot edit them.
        </Text>
      </View>

      {/* Notes List */}
      {filteredNotes.map((n, i) => (
        <Card key={n.date}>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <IconBubble
              name={tab === 'Progress Notes' ? 'trending-up-outline' : 'clipboard-outline'}
              bg={i % 2 === 0 ? colors.mint : colors.sky}
              color={i % 2 === 0 ? colors.tealDark : '#4C78D0'}
            />
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Pill
                  label={n.type}
                  tone={tab === 'Progress Notes' ? 'green' : 'blue'}
                />
                <Text style={{ fontSize: 10, color: colors.muted }}>{n.date}</Text>
              </View>

              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 21,
                  color: '#52617F',
                  marginTop: 12,
                }}
              >
                {n.body}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 12,
                }}
              >
                <Ionicons name="person-outline" size={14} color={colors.muted} />
                <Text style={{ fontSize: 11, color: colors.muted }}>
                  Dr. Emily Carter · Care team
                </Text>
              </View>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default NotesScreen;