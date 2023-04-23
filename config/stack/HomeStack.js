import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../modules/home/adaprters/screens/Home'

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
     <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#fff' }
            }}>
            <Stack.Screen
                name='homeStack'
                options={{ title: '' }}
                component={Home}
            />
        </Stack.Navigator>
  )
}