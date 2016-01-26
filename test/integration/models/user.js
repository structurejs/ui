import {UserGenerator} from 'structure-test-helpers'
import UserModel       from '../../../app/models/user'

describe('Integration: Models: User', function() {

  it('should create a user', function(done) {

    var user = new UserModel()
    var pkg  = new UserGenerator()

    user.create(pkg, function(err, res) {

      expect(res.id).to.be.a('string')
      expect(res.hash).to.be.a('string')

      done()

    })

  })

  it('should get a user by ID', function(done) {

    var user = new UserModel()
    var pkg  = new UserGenerator()

    user.create(pkg, function(err, res) {

      user.get(res.id, function(err2, res2) {

        expect(res2.id).to.be.a('string')
        expect(res2.hash).to.be.a('string')

        done()

      })

    })

  })

  it('should update a user by ID', function(done) {

    var user = new UserModel()
    var pkg  = new UserGenerator()

    user.create(pkg, function(err, res) {

      user.update(res.id, {firstName: 'baz'}, function(err2, res2) {

        expect(res2.firstName).to.equal('baz')

        done()

      })

    })

  })

})
