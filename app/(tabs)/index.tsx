import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HomePage from '@/components/screens/HomePage';
import { Stack } from '@/navigation/AppNavigator';
import React from 'react';

export default function HomeScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomePage}
          options={{
            headerShown: false, // 因为 HomePage 已经有了自己的头部设计
          }}
        />
        {/* 在这里添加其他页面路由 */}
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
