<template>
  <div id="app">
    <b-navbar fixed="top" :sticky="true" toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">PWA Chat</b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'app'
}
</script>

<style>
</style>
