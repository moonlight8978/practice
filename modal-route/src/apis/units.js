import data from './MOCK_DATA'

const UnitsApi = {
  async all() {
    return new Promise(resolve => setTimeout(() => resolve(data), 2000))
  },

  async find(id) {
    const unit = data.find(unit => unit.id === id)
    return new Promise(resolve => setTimeout(() => resolve(unit), 2000))
  }
}

export default UnitsApi
