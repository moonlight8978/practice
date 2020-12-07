import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { Button, Text, View } from 'react-native'
import { object, string } from 'yup'

import { SignInForm } from '@src/types/local'
import { useAuth } from '@src/features/auth'
import { Input } from '@src/components'

const initialValues: SignInForm = {
  username: '',
  password: '',
}

const validationSchema = object({
  username: string().required(),
  password: string().required(),
})

export default function SignInScreen() {
  const { signIn } = useAuth()

  const onSubmit = useCallback((form: SignInForm) => signIn(form), [signIn])

  return (
    <View style={{ padding: 20 }}>
      <Formik<SignInForm> initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <>
            <Text>Username</Text>
            <Input.Text value={values.username} onChangeText={handleChange('username')} testID="usernameInput" />
            {errors.username && <Text>{errors.username}</Text>}

            <Text>Password</Text>
            <Input.Text value={values.password} onChangeText={handleChange('password')} testID="passwordInput" />
            {errors.password && <Text>{errors.password}</Text>}

            <Button title="Sign in" onPress={handleSubmit} testID="signInButton" />
          </>
        )}
      </Formik>
    </View>
  )
}
