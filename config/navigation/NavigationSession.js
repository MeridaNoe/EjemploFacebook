import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import HomeStack from '../stack/HomeStack'
import ProfileStack from '../stack/ProfileStack'
import SearchStack from '../stack/SearchStack'

const Tab = createBottomTabNavigator()
export default function NavigationSession() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown:false
                })}>
                    <Tab.Screen
                        name='home'
                        component={HomeStack}
                        options={{title: 'Inicio'}}
                    />
                    <Tab.Screen
                        name='search'
                        component={SearchStack}
                        options={{title: 'Amigos'}}
                    />
                    <Tab.Screen
                        name='profile'
                        component={ProfileStack}
                        options={{title: 'Mi perfil'}}
                    />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'home':
            iconName = 'home'
            break;
        case 'search':
            iconName = 'account-multiple'
            break
        case 'profile':
            iconName = 'account'
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={22}
        color={color}></Icon>)
}