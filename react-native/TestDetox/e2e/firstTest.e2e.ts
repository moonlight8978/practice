describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('sign in, then sign out user', async () => {
    await element(by.id('usernameInput')).typeText('moonlight')
    await element(by.id('passwordInput')).typeText('password')
    await element(by.id('signInButton')).tap()

    await expect(element(by.text('moonlight'))).toBeVisible()

    await element(by.id('signOutButton')).tap()
    await element(by.label('OK').and(by.type('_UIAlertControllerActionView'))).tap()

    await expect(element(by.text('SignIn'))).toBeVisible()
  })
})
