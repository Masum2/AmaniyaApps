import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const OnboardingScreen = ({ navigation }: Props) => {
  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={['#2A6B75', '#8AC6C2', '#E6F4F1']}
        locations={[0, 0.5, 1]}
        style={{ flex: 1, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
      >
        <View className="flex-1 px-6 pt-16 pb-10 justify-between items-center">
          
          {/* Main Content Area */}
          <View className="items-center w-full mt-10">
            
            {/* Circular Illustration Area */}
            <View className="items-center justify-center w-[300px] h-[300px] mb-8">
              
              {/* Outer Ring */}
              <View className="absolute w-[280px] h-[280px] rounded-full border border-white/20 bg-white/10 items-center justify-center">
                
                {/* Middle Ring */}
                <View className="absolute w-[200px] h-[200px] rounded-full border border-white/30 bg-white/20 items-center justify-center">
                  
                  {/* Inner Ring & Image */}
                  <View className="w-[120px] h-[120px] rounded-full bg-white/40 p-1">
                    <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' }}
                      className="w-full h-full rounded-full"
                      resizeMode="cover"
                    />
                  </View>

                  {/* Floating Icons on Middle Ring */}
                  <View className="absolute -top-5 bg-white/20 p-2 rounded-full border border-white/30">
                    <Ionicons name="pulse" size={20} color="#fff" />
                  </View>
                  <View className="absolute -bottom-5 bg-white/20 p-2 rounded-full border border-white/30">
                    <Ionicons name="medical" size={20} color="#fff" />
                  </View>
                  <View className="absolute -right-5 top-1/2 -mt-5 bg-white/20 p-2 rounded-full border border-white/30">
                    <Ionicons name="people" size={20} color="#fff" />
                  </View>
            
                </View>
              </View>

              {/* Floating Icons on Outer Ring (Top, Bottom-Left, Bottom-Right) */}
              <View className="absolute top-2 bg-white/20 p-2 rounded-full border border-white/30">
                <Ionicons name="fitness" size={20} color="#fff" />
              </View>
              <View className="absolute bottom-8 -left-2 bg-white/20 p-2 rounded-full border border-white/30">
                <Ionicons name="shield-checkmark" size={20} color="#fff" />
              </View>
              <View className="absolute bottom-10 -right-2 bg-white/20 p-2 rounded-full border border-white/30">
                <Ionicons name="medkit" size={20} color="#fff" />
              </View>
            </View>

            {/* Headline, Slogan & Description */}
            <View className="items-center px-4 mt-2">
              {/* App Name */}
              <Text className="text-[34px] font-extrabold text-slate-900 tracking-tight mb-2">
                MyAmaniya
              </Text>

              {/* Slogan (Added from the first file) */}
              <Text className="text-[16px] font-semibold text-[#1a4f56] text-center mb-5">
                Your mental health journey, in your hands.
              </Text>

              {/* Description */}
         <Text className="text-[15px] leading-6 text-center text-slate-600 px-2">
  MyAmaniya brings your mental wellness, care team, and daily progress together — so you never have to navigate your journey alone.
</Text>
            </View>
          </View>

          {/* Footer Action Button */}
          <View className="w-full mt-8 items-center">
            <TouchableOpacity 
              className="w-full bg-white rounded-2xl py-4 items-center shadow-sm"
              activeOpacity={0.8}
              onPress={handleGetStarted}
            >
              <Text className="text-black font-bold text-[16px]">Get Started</Text>
            </TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  );
};

export default OnboardingScreen;