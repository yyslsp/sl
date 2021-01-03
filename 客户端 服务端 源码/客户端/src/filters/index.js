import Vue from 'vue';
import date from './date.js';
import fillzero from './fillezero.js';
//.. 100 个过滤

Vue.filter('date',date);
Vue.filter('fillzero',fillzero);