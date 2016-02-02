import Dragon     from 'dragon.js'
import {Template} from 'starplate'

var partials = {
  loggedIn: require('./templates/menu-loggedin'),
  loggedOut: require('./templates/menu-loggedout')
}

function partial(name, data) {

  var temp = new Template(partials[name])
  return temp.render(data)

}

class NavigationView extends Dragon.View {

  constructor(options = {}) {

    super(Object.assign({}, {
      //container: '#app-container',
      id: 'navigation-view',
      template: require('./templates/index')
    }, options))

  }

  onAddedToDOM() {

  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {
          menu: this.model.attr.id ? partial('loggedIn', this.model.attr) : partial('loggedOut', this.model.attr)
        })

    }

  }

}

export default NavigationView
