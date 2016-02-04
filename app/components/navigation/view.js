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

        var loggedInData = {
          organization: this.models.organization.attr,
          user: this.models.user.attr
        }

        return Object.assign({}, state, {
          menu: this.models.user.attr.id ? partial('loggedIn', loggedInData) : partial('loggedOut')
        })

    }

  }

}

export default NavigationView
