// //vue-cli配置文件(webpack|nodejs|commonjs)

// //客户端反向代理

// //对外暴漏node模块，在项目与形式，会被cli读取，来影响项目的默认配置
// module.exports={
// 	//代理地址
// 	devServer:{
// 		proxy:{//设置多个代理
// 			//api === target + /api
// 			'/api':{//api是中介通过中介访问3000服务器然后返回数据
// 				target:'http://localhost:3000',//本地node  http://localhost:3000/api/list/home
// 				ws:true,
// 				changeOrigin:true
// 			},
// 			'/sl':{//foo中介
// 				target:'http://localhost:80',//本地php  http://localhost:80/sl/weibo.php
// 				changeOrigin:true
// 			},
			
// 			//bulala===target + /bulala
// 			'/bulala':{//foo中介
// 				target:'http://47.116.74.169:80',//远端mock服务器 http://47.116.74.169/mock/home
// 				changeOrigin:true,
// 				pathRewrite:{//路由替换
// 				//实则是访问mock
// 					'^/bulala':'mock'
// 				}
// 			},
// 		}
		
// 	}
// }

//vue-cli配置文件  (webpack|nodejs|commonJs)

//对外暴露node模块，在项目运行时，会被cli读取，来影响项目的默认配置

module.exports = {
  // key:value
  devServer: {
    proxy: {//设置多个代理
      '/api': {//  /api === target + /api
        target: 'http://localhost:3000',//本地node  http://localhost:3000/api/list/home
        ws: true,
        changeOrigin: true
      }
    }
  }
}