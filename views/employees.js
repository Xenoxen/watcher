var employeesView = Vue.component("employees-view", {

    created() {
        $(document).ready(function(){
            $('.fixed-action-btn').floatingActionButton();
          });
    },
    
    template: `<div>
    <div class="row">
    <div class="col s12">
    <div class="card">
        <div class="card-content">
        <span class="card-title">Employees</span>
        <div class="input-field">
          <input placeholder="Search Employee by Employee ID or Name" id="first_name" type="text" class="validate">
        </div>
        <table class="highlight">
        <thead>
        <tr>
          <th colspan="2">Full Name</th>
          <th>Employee ID</th>
          <th>Last Login</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><router-link to="/"><img class="circle" src="assets/img/stockgirl5.png" style="width: 40px;"></router-link></td>
        <td><p>Jessie Andrewson Williams</p></td>
        <td><p>E000001</p></td>
        <td>March 04, 2020 4:22PM</td>
        <td><a class="btn-floating waves-effect waves-light red" style="box-shadow: none !important;"><i class="material-icons">add</i></a></td>
        </tr>
        </tbody>
        </table>
        </div>
      </div>
    </div>
      
    </div>
    

    <div class="fixed-action-btn">
  <router-link to="/main/new-employee" class="btn-floating btn-large blue accent-3">
    <i class="large material-icons">add</i>
  </router-link>
</div>

    </div>`
})

var newEmployeeView = Vue.component("new-employee-view", {

  created() {
    $(document).ready(function(){
      $('.datepicker').datepicker();
    });
  },
  template: `<div class="row">
  <div class="col s12 m6">
  <div class="card">
  <div class="card-content">
  <span class="card-title">New Employee</span>
  <div class="row">
  <div class="input-field col s12 m4">
          <input id="fname" type="text" class="validate">
          <label for="fname">First Name</label>
        </div>
        <div class="input-field col s12 m4">
          <input id="mname" type="text" class="validate">
          <label for="mname">Middle Name</label>
        </div>
        <div class="input-field col s12 m4">
          <input id="lname" type="text" class="validate">
          <label for="lname">Last Name</label>
        </div>
  </div>
  <div class="row">
  <div class="input-field col s12 m6">
          <input id="email" type="text" class="validate">
          <label for="email">Email Address</label>
        </div>
        <div class="input-field col s12 m6">
        <input id="contact" type="text" class="validate">
        <label for="contact">Contact No.</label>
      </div>
  </div>
  <div class="row">
  <div class="input-field col s12 m6">
          <input id="address" type="text" class="validate">
          <label for="address">Home Address</label>
        </div>
  <div class="input-field col s12 m6">
          <input id="dob" type="text" class="datepicker">
          <label for="dob">Date of Birth</label>
        </div>
  </div>
  <div class="row">
  <button class="col s12 m12 btn btn-large waves-effect waves-light" type="submit" name="action">Create Account
    <i class="material-icons right">person_add</i>
  </button>
  </div>
  
  </div>
  </div>
  </div>
  <div class="col s12 m6">
  <div class="card">
        <div class="card-image">
          <img src="assets/img/enforcer.jpg">
        </div>
        <div class="card-content">
          <p>Create employee accounts for them to access specialized tools and information from the
          Tarlac Road Companion Mobile App!  Employees will receive their login information such as their
          username and temporary password via email address.  Both username and temporary password are automatically generated.</p>
        </div>
      </div>
  </div>
  </div>`
})