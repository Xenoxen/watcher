var mainView = Vue.component('main-view', {

    template: `<main>
    <side-nav></side-nav>
    <div style="margin: 5px;">
    <router-view></router-view>
    </div>
    </main>`
})