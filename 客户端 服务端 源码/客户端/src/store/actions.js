import axios from '../plugins/axios.js'

let actions = {
// 	//details数据
	UPDATE_HOME:({commit,state},payload)=>{
		axios('/api/list/details').then(
		//将数据发给mutations进行突变
		res=>commit('UPDATE_HOME',res.data))
	
}
}
export default actions;