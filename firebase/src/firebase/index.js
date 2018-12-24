import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import { config } from './config'

const Firebase = {
  initialize() {
    firebase.initializeApp(config)
    return {
      database: firebase.database(),
      auth: firebase.auth(),
    }
  },
}

export default Firebase.initialize()
