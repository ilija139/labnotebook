import Vue from 'vue'
import App from './App.vue'
// import Resource from 'vue-resource'
import VueHighCharts from 'vue-highcharts'
import Highcharts from 'highcharts'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import loadStock from 'highcharts/modules/stock';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
loadStock(Highcharts)
Highcharts.setOptions({credits: false})

// Vue.use(Resource);
Vue.use(Vuetify);
Vue.use(VueHighCharts, {Highcharts});
Vue.use(VueAxios, axios)
// Vue.http.options.root = 'http://localhost:3000'

new Vue({
  el: '#app',
  render: h => h(App)
})
