import React, { useCallback } from 'react'
import { Alert, Button, Text, View } from 'react-native'

import { useAuth } from '@src/features/auth/auth'

export default function ProfileScreen() {
  const { user, signOut } = useAuth()

  const confirmAndSignOut = useCallback(() => {
    Alert.alert('Sign out', 'Are you sure to sign out?', [{ text: 'OK', onPress: signOut }], { cancelable: false })
  }, [signOut])

  return (
    <View style={{ padding: 20 }}>
      <Text>Username: </Text>
      <Text>{user.username}</Text>

      <Button title="Sign out" onPress={confirmAndSignOut} testID="signOutButton" />
    </View>
  )
}
