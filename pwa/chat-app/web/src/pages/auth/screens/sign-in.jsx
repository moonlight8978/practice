import React, { useMemo } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Layout, Form, Input, Button, Typography } from 'antd'

import { Image } from '../../components/image'
import { signIn } from '../authorization.actions'

import styles from './sign-in.module.scss'

const { Title, Text } = Typography

const initForm = () => ({
  username: '',
  password: '',
})

const SignInFormView = ({ children, signIn }) => {
  const initialValues = useMemo(initForm, [])

  return (
    <Formik initialValues={initialValues} onSubmit={signIn}>
      {formikProps => children(formikProps)}
    </Formik>
  )
}

const SignInForm = connect(
  null,
  { signIn }
)(SignInFormView)

export default function SignIn() {
  return (
    <Layout>
      <Layout.Header className={classnames('header', styles.header)}>
        <Image
          src="/messenger-icon.png"
          alt="Messenger"
          className={styles.logo}
        />
      </Layout.Header>

      <Layout.Content className={styles.content}>
        <Title level={2} className={styles.title}>
          Luôn luôn bên nhau.
        </Title>

        <div className={styles.subTitleWrapper}>
          <Text type="secondary" strong className={styles.subTitle}>
            Cách đơn giản để nhắn tin, chat video, lên kế hoạch - ở cùng một
            nơi.
          </Text>
        </div>

        <SignInForm>
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Item
                className={styles.formItem}
                validateStatus={'success'}
                help={null}
              >
                <Input
                  type="text"
                  placeholder="Username"
                  value={values.username}
                  name="username"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                validateStatus={'success'}
                help={null}
              >
                <Input.Password
                  type="text"
                  placeholder="Password"
                  value={values.password}
                  name="password"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  visibilityToggle={false}
                />
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                shape="round"
                className={styles.signInButton}
              >
                Đăng nhập
              </Button>
            </Form>
          )}
        </SignInForm>
      </Layout.Content>
    </Layout>
  )
}
