import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useAuth } from '@src/features/auth/auth'
import { screenNames } from '@src/config'

import SignInScreen from './sign-in'
import ProfileScreen from './profile'

const Stack = createStackNavigator()

export default function Screens() {
  const { isAuthenticated } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name={screenNames.profile} component={ProfileScreen} />
        ) : (
          <Stack.Screen name={screenNames.signIn} component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
