var sidenav = Vue.component("side-nav", {

    mounted(){
        $(".dropdown-trigger").dropdown();
    },

    template: `<div>
    <nav style="box-shadow: none !important;">
    <div class="nav-wrapper blue darken-2">
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
    <a class="dropdown-trigger valign-wrapper" href="#" data-target="dropdown1"><img class="circle" src="assets/img/stockgirl5.png" style="margin: 0 8px;width: 40px; height: 40px;">Frolyn Raguindin
    </a>
    </li>
  </ul>
    
    <ul id="dropdown1" class="dropdown-content" style="transform: translateY(64px) !important;">
  <li><a href="#!">My Profile</a></li>
  <li><a href="#!">Settings</a></li>
  <li class="divider"></li>
  <li><router-link to="/">Logout</router-></li>
</ul>
    </div>
  </nav>

    <ul id="slide-out" class="sidenav sidenav-fixed blue darken-4">
      <nav-button link="/" icon="dashboard" text="Dashboard"></nav-button>
      <li><div class="divider blue accent-2"></div></li>
      <nav-button link="/" icon="person" text="Employees"></nav-button>
      <nav-button link="/" icon="drive_eta" text="Drivers"></nav-button>
      <li><div class="divider blue accent-2"></div></li>
      <nav-button link="/" icon="airport_shuttle" text="Transport"></nav-button>
      <nav-button link="/" icon="report" text="Violations"></nav-button>
      <li><div class="divider blue accent-2"></div></li>
      <nav-button link="/" icon="poll" text="Statistics"></nav-button>
      <nav-button link="/" icon="chrome_reader_mode" text="Documentation"></nav-button>
    </ul>
  
    </div>`
})

var navBtn = Vue.component("nav-button", {
  props: ["link", "icon", "text"],
  template: `<li><router-link id="nav-btn" v-bind:to="link" style="color: #e0e0e0; font-size: 12px;"><i style="color: #e0e0e0; margin: 0 !important;" class="material-icons">{{icon}}</i>{{text}}</router-link></li>`
});