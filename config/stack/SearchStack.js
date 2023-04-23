import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../../modules/rent/adapters/screens/Search'

const Stack = createNativeStackNavigator()

export default function RentStack() {
  return (
    <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#fff' }
            }}>
            <Stack.Screen
                name='rentStack'
                options={{ title: '' }}
                component={Search}
            />
        </Stack.Navigator>
  )
}
