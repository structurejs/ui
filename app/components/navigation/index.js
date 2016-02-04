import Dragon         from 'dragon.js'
import NavigationView from './view'
import Organization   from '../organizations/model'
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
      models: {
        organization: new Organization(),
        user: new User()
      }
    })

  }

}

export default NavigationComponent
