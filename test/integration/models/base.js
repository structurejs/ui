import BaseModel from '../../../app/models/base'

describe('Integration: Models: Base', function() {

  it('should create a resource', function(done) {

    var base = new BaseModel()

    base.create({foo: 'bar'}, function(err, res) {

      expect(res.foo).to.equal('bar')

      done()

    })

  })

  it('should get a resource by ID', function(done) {

    var base = new BaseModel()

    base.create({foo: 'bar'}, function(err, res) {

      base.get(res.id, function(err2, res2) {

        expect(res.id).to.equal(res2.id)

        done()

      })

    })

  })

  it('should update a resource by ID', function(done) {

    var base = new BaseModel()

    base.create({foo: 'bar'}, function(err, res) {

      base.update(res.id, {foo: 'baz'}, function(err2, res2) {

        expect(res2.foo).to.equal('baz')

        done()

      })

    })

  })

})
