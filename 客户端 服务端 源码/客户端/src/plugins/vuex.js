//安装插件
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import * as types from '../store/types.js';

import state from '../store/state.js'
import mutations from '../store/mutations.js'
import actions from '../store/actions.js'


Vue.prototype.$types=types;

import shop_car from '../store/moduls/shop-car.js'
			//商品1，商品2

let store =  new Vuex.Store({
	state,actions,mutations,
	 modules:{shop_car}
})
export default store;

