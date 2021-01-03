const state={
	list:[
		//{_id:title:'xxx',sub_title:'xxx',num:4}
		
	],
	authData:[]
	
}

const actions={
	//commit模块内部的实例方法 通讯工具
	//state 属性 获取公共数据 
	//payload 负载--往list里添加数据
	
	//添加到购物车|关注|收藏
	addItem({commit,state},payload){
		let find=false;//是否找到 默认为找到false
		//遍历list 看有没有这个数据
		
		state.list.forEach((item,index)=>{
		//payload用户点击的时候传过来的数据
		//payload==={_id:title:'xxx',sub_title:'xxx',num:4}
		if(item._id===payload._id){
			find=true;
			item.num++;
			
		}
			
		})
		if(!find){
			payload.num=1;
			state.list.push(payload)
		}
		alert('添加成功')
		
		commit('addItem',[...state.list])
	},
	
// ==============================================

	    //删除购物车某一项||取关||取消收藏
		removeItem({commit,state},payload){
			let tmpArr=[...state.list];
			//先查看有没有这个数据  有就删除
			tmpArr.list.forEach((item,index)=>{
			if(item._id===payload._id){
				//找到了就删除一条
				tmpArr.list.splice(index,1)
			}
				
			})
			//将改过以后的list传过去
			commit('removeItem',tmpArr)
		},
		
// ==============================================

	//修改商品的数量
	changeItem({commit,state},payload){
		state.list.forEach((item,index)=>{
		if(item._id===payload._id){
			//要求payload传过来的num是正或负
			item.num+=payload.num
		}
			
		})
		commit('changeItem',[...state.list])
	},
	
	
	
}


//交给moutions处理
const mutations={
	addItem:(state,payload)=>{state.list=payload},
	removeItem:(state,payload)=>{state.list=payload},
	changeItem:(state,payload)=>{state.list=payload},
	clearList:(state,payload)=>{state.list=[]},
}

export default {
  namespaced:true,
  state,actions,mutations
}