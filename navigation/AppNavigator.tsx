import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../components/screens/HomePage';

export type RootStackParamList = {
  Home: undefined;
  // 在这里添加其他页面的参数类型
  // Example: ServiceDetail: { serviceId: string };
};

export const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
} 