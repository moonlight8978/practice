import axios from 'axios'

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export const PeopleApi = {
  async fetch() {
    await delay(500)
    return axios.get('/people.json')
  },
}
