import Auth           from '../models/auth'
import Dragon         from 'dragon.js'
import IndexView      from '../components/dashboard/views/index'
import NavigationView from '../components/navigation/view'
import User           from '../models/user'

class DashboardController extends Dragon.Controller {

  index(req, res, next) {

    this.model = new User(null, {

    })

    this.compose('navigation', new NavigationView({
      model: this.model
    }))

    this.dashboardIndex = new IndexView({

    })

  }

}

export default DashboardController
