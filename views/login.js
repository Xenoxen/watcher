var loginView = Vue.component('login-view', {

    template: `
    <div>
    <div class="valign-wrapper row login-box" style="margin-top: 8%">
  <div class="col card s10 pull-s1 m6 pull-m3 l4 pull-l4" style="box-shadow: none !important;">
    <form>
      <div class="card-content">
<div class="center-align" style="padding: 30px;">
<img style="width: 200px;" src="assets/img/soms-logo.png">
</div>
        <span class="card-title center-align">Tarlac Road Watcher</span>
        <div class="row">
          <div class="input-field col s12">
            <label for="email">Email</label>
            <input type="email" class="validate" name="email" id="email" />
          </div>
          <div class="input-field col s12">
            <label for="password">Password</label>
            <input type="password" class="validate" name="password" id="password" />
          </div>
        </div>
      </div>
      <div class="card-action right-align">
        <router-link to="/main" class="btn blue-accent-2 waves-effect waves-light btn-large" style="width: 100%;">LOGIN</router-link>
      </div>
    </form>
  </div>
</div>
    </div>`
})