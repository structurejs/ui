import Dragon from 'dragon.js'

class BaseCollection extends Dragon.Collection {

  constructor(entries = [], options = {}) {
    super(entries, options)
  }

}

export default BaseCollection
