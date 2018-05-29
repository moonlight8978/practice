import axios from 'axios'

const DATA_FILE = '/static/data.json'

class FKGApi {
  async initialize() {
    if (this.fkgs === undefined) {
      const { data } = await axios.get(DATA_FILE)
      // convert array to hash
      this.fkgs = data.reduce((hash, fkg) => {
        hash[fkg.id] = fkg
        return hash
      }, {})
    }
  }

  async all() {
    await this.initialize()
    return Promise.resolve(this.fkgs)
  }

  async find(id) {
    await this.initialize()
    return Promise.resolve(this.fkgs[id])
  }
}

export default new FKGApi()
