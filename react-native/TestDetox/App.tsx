import React from 'react'

import { AuthProvider } from '@src/features/auth/auth'
import Screens from '@src/screens/screens'

export default function App() {
  return (
    <AuthProvider>
      <Screens />
    </AuthProvider>
  )
}
