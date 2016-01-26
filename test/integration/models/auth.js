import {UserGenerator} from 'structure-test-helpers'
import AuthModel       from '../../../app/models/auth'
import UserModel       from '../../../app/models/user'

describe('Integration: Models: Auth', function() {

  it('should login a user', function(done) {

    var auth = new AuthModel(),
        pkg  = new UserGenerator(),
        user = new UserModel()

    user.create(pkg, function(err, res) {

      auth.login({
        hash: res.hash,
        password: pkg.password,
        username: res.username
      }, function(err2, res2) {

        expect(res2.id).to.equal(res.id)
        expect(res2.token).to.be.a('string')

        done()

      })

    })

  })

})
