import Dragon    from 'dragon.js'
import RefsMixin from './mixins/refs'

class BaseView extends Dragon.View {

  constructor(options = {}) {
    super(options)
  }

  getElementIndex(p, c) {
    var index = null

    for(var i = 0, l = p.length; i < l; i++) {
      if(p[i] == c) {
        index = i
        break
      }
    }

    return index
  }

}

BaseView.prototype.mixin(RefsMixin)

export default BaseView
