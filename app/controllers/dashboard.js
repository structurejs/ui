import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import IndexView           from '../components/dashboard/views/index'
import NavigationComponent from '../components/navigation/index'
import User                from '../models/user'

class DashboardController extends Dragon.Controller {

  index(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.dashboardIndex = new IndexView({

    })

  }

}

export default DashboardController
