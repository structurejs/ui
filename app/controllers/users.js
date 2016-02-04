import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import CreateView          from '../components/users/views/create'
import IndexView           from '../components/users/views/index'
import ListView            from '../components/users/views/list'
import ProfileView         from '../components/users/views/profile'
import NavigationComponent from '../components/navigation/index'
import Organization        from '../components/organizations/model'
import schemaCreate        from '../components/users/schemas/create'
import User                from '../models/user'
import Users               from '../components/users/collection'

class UserController extends Dragon.Controller {

  create(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new CreateView({
      model: new User({
        organizations: [new Organization().attr.id]
      }, {
        schema: schemaCreate,
        storeAutoLoad: false
      })
    })

  }

  index(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new IndexView({

    })

    var users = new Users()
    users.fetch( () => {

      this.list = new ListView({
        collection: users
      })

    })

  }

  profile(req, res, next) {

    this.compose('navigation', NavigationComponent)

    var user = new User()
    user.get(req.params.sid, () => {

      this.profile = new ProfileView({
        model: user
      })

    })

  }

}

export default UserController
