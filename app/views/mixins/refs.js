class Ref {

  constructor(name, selector) {

    this.name = name
    this.$ref = document.querySelectorAll(selector)
    this.selector = selector

  }

  each(cb) {
    Array.prototype.forEach.call(this.$ref, cb)
  }

  list() {
    return this.$ref
  }

  one(i) {
    return this.$ref[i]
  }

  val() {
    return (this.$ref[0] && this.$ref[0].value) ? this.$ref[0].value : ''
  }

}

class RefsViewMixin {

  refFormValues(name) {
    if(this.form && this.form[name]) {
      var pkg = {}

      this.form[name].forEach((refName) => {
        var ref = this.$refs[refName]
        pkg[ref.name] = ref.val()
      })

      return pkg
    }

    return {}
  }

  refs(name, selector, options = {}) {

    if(!this.$refs) this.$refs = {}

    if(selector) {
      this.$refs[name] = new Ref(name, selector)
    }

    if(options.form) {
      if(!this.form) this.form = {}
      if(!this.form[options.form]) this.form[options.form] = []

      this.form[options.form].push(name)
    }

    return this.$refs[name]

  }

}

export default RefsViewMixin
