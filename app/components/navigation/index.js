import Dragon         from 'dragon.js'
import NavigationView from './view'
import User           from '../../models/user'

class NavigationComponent extends Dragon.Component {

  constructor(options = {}) {
    super(Object.assign({}, {
      class: 'component',
      container: '#app-container',
      id: 'component-navigation',
      tagName: 'nav'
    }, options))

    this.navView = new NavigationView({
      container: `#${this.id}`,
      model: new User()
    })
  }

}

export default NavigationComponent
