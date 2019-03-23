import Firebase from '.'

export const signUp = async ({ username, displayName }) => {
  const db = Firebase.database.ref('/users')
  db.once('value', snapshot => {
    if (snapshot.hasChild(username)) {
      throw Error(`User ${username} has exist`)
    }
  })
  const user = db.child(username)
  user
    .set({
      id: user.key,
      username,
      displayName,
    })
    .catch(error => {
      throw Error(`Something went wrong`)
    })
  return {
    username,
    displayName,
  }
}
