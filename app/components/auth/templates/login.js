module.exports = `
<div class="row">
  <form class="block-form form-view login-form col-xs-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4" data-state="">

    <div class="form-group">
      <input type="text" class="form-control login-field" value="" placeholder="Username" id="auth-username">
      <label class="login-field-icon fui-user" for="auth-username"></label>
    </div>

    <div class="form-group">
      <input type="password" class="form-control login-field" value="" placeholder="Password" id="auth-password">
      <label class="login-field-icon fui-lock" for="auth-pass"></label>
    </div>

    <button id="form-submit" class="btn btn-primary btn-lg btn-block btn-submit" href="#">
      <span class="btn-auth-text">#{text.submit}</span>
    </button>

    <a class="link-create-account" href="/auth/create">Create Account</a>

  </form>
</div>
`
