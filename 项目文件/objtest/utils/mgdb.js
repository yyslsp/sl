// let mongodb = require("mongodb");
// //实例化
// let mongoCt = mongodb.MongoClient;//这个属性未来可能会弃用
// let ObjectId = mongodb.ObjectId;//

// let sql = 'app';//默认库
// let collection = 'list';//集合名


// //链接方法  open
// let open = ({dbName=sql,collectionName=collection,url='mongodb://127.0.0.1:27017'}) => {           //成功结果 ,失败结果
//     return new Promise((resolve,reject)=>{

//         mongoCt.connect(url,{useUnifiedTopology:true},(err,client)=>{
//             if(err)reject(err)
//             let db = client.db(dbName);//连接库
//             let collection = db.collection(collectionName)//连接集合
//             //自由选择打开集合 和关闭库
//             resolve({collection,client,ObjectId,})
            
//         }) 
//     })
// }




// //查询列表信息 findList

// let findList = ({
//     collectionName=collection,//集合
//     dbName=sql,//库
//     _page,_limit,_sort,q//可选参数

// }={})=>{
//     //_page页数  
//     //q检索 
//     //_limit限定
//     //_sort排序

//     //生成列表条件
//     let rule = q ? {username:eval('/'+q+'/')} : {}//目前不是全文检索只针对name

//     return new Promise((resolve,reject)=>{
//          //连库
//     open({
//         collectionName,dbName
//     }).then(
//         ({collection,client})=>{
//             //集合查询
//             collection.find(rule,{
//                 skip:_page*_limit,//页乘条
//                 limit:_limit,
//                 projection:{},
//                 sort:{[_sort]:-1}
//                 //转数组
//             }).toArray((err,result)=>{
//                 //转失败err  转成功result
//                 if(!err && result.length>0){
//                     //判断集合操作没有失败并且数据有长度
//                     //调取成功
//                     resolve({
//                         err:0,
//                         data:result
//                     })
//                 }else{//到这都是没有查询到
//                     resolve({
//                         err:0,
//                         msg:'查询无数据'
//                     })
//                 }
//                 //关库
//                 client.close();
//             })
            
//         }
//     ).catch(//捕获失败
//         ((err)=>{
//             reject({err:1,msg:'库连接失败'+err})
//         })

//     )
//     })

   
// }



// //查询详情 findDetail
// let findDetail = ({
//     collectionName=collection,//集合
//     dbName=sql,//库
//     _id = null
// }={})=>
//       new Promise((resolve,reject)=>{

//     //判断id的合法性  长度 字符 符不符合规则
//     if(_id && _id.length===24){
//         //连库
//     open({
//         collectionName,dbName
//     }).then(
//         ({collection,client})=>{
//             //查询

//             collection.find({
//                 _id:ObjectId(_id)//将数组转对象
//             },{
//                 projection:{_id:0}
//             }).toArray((err,result)=>{
//                 //转失败err  转成功result
//                 if(!err && result.length>0){
//                     //判断集合操作没有失败并且数据有长度
//                     //调取成功
//                     resolve({
//                 //通过id查询，回来的result也是数组,给客户端的详情数据是一个对象
//                         err:0,
//                         data:result[0]
//                     })
//                 }else{//到这都是没有查询到
//                     resolve({
//                         err:0,
//                         msg:'查询无数据'
//                     })
//                 }
//                 //关库
//                 client.close();
//             })
            
//         }
//         ).catch(//捕获失败
//             ((err)=>{
//                 reject({err:1,msg:'库连接失败'+err})
//             })

//         )
//     }else{
//         reject({err:1,msg:'id未传递，或长度格式不对'
//      })
//     }
    
//     })

   



// exports.open = open;
// exports.findList = findList;
// exports.findDetail = findDetail;

// console.log('mgdb')
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;//属性未来弃用 ***
let ObjectId = mongodb.ObjectId;//mongodb的_id是一个ObjectId类型



let sql = 'app';//默认库
// let collection = 'details';//默认库

//链接方法  open

let open = ({ dbName = sql, collectionName = collection, url = 'mongodb://127.0.0.1:27017' }) => {
  return new Promise((resolve, reject) => {
    mongoCt.connect(url, { useUnifiedTopology: true }, (err, client) => {
      if (err) reject(err)
      let db = client.db(dbName);//链接库
      let collection = db.collection(collectionName);//链接集合
      resolve({ collection, client, ObjectId})
    })
  })
}


/* function open(opts){
  opts = opts || {}
  opts.url=opts.url||url;
  opts.dbName=opts.dbName||sql;
  opts.collectionName=opts.collectionName||collection;
  
  mongoCt.connect(opts.url,(err,client)=>{
    let db = client.db(opts.dbName);//链接库
    let collection = db.collection(opts.collectionName);//链接集合
    if(err) opts.error && opts.error(err)
    opts.success && opts.success(collection)
  })
}
 */


//查询列表 findList
let findList = ({
  collectionName = collection,
  dbName = sql,
  _page, _limit, _sort, q //可选参数
} = {}) => {
  // _page 页数 q 检索 _limit 限定 _sort 排序

  //生成条件
  // let rule = q ? {title: new RegExp('/'+q+'/',g)} : {}
  let rule = q ? { title: eval('/' + q + '/') } : {};//目前还不是全文检索，只针对了title

  return new Promise((resolve, reject) => {
    //链库
    open({
      collectionName, dbName
    }).then(
      ({ collection, client }) => {
        console.log(2,_limit)
        //集合查询
        collection.find(rule, {
          skip: _page * _limit,
          limit: _limit,
          projection: {},
          sort: { [_sort]: 1 }
        }).toArray((err, result) => {//转数组
          if (!err && result.length > 0) {//集合操作没有失败，数据有长度
            resolve({
              err: 0, data: result
            })
          } else {//没有查询到
            resolve({ err: 0, msg: '查无数据' })
          }
          client.close()
        })
      }
    ).catch(
      err => reject({ err: 1, msg: '库链接失败' + err })
    )
  })

}

//查询详情  findDetail
let findDetail = ({
  collectionName = collection,
  dbName = sql,
  _id = null
} = {}) => new Promise((resolve, reject) => {

  //判断 _id的合法性 长度 字符
  if (_id && _id.length === 24) {
    //链库
    open({
      collectionName, dbName
    }).then(
      ({ collection, client }) => {
        //查询
        collection.find({
          _id: ObjectId(_id)
        }, {
          projection: { _id: 0 }
        }).toArray((err, result) => {//转数组
          if (!err && result.length > 0) {//集合操作没有失败，数据有长度
            resolve({
              err: 0, data: result[0]//通过id查询，回来的result也是数组,给客户端的详情数据是一个对象
            })
          } else {//没有查询到
            resolve({ err: 0, msg: '查无数据' })
          }
          client.close();//关库
        })
      }
    ).catch(
      err => reject({ err: 1, msg: '库链接失败' + err })
    )
  } else {
    reject({ err: 1, msg: 'id未传递，或长度格式有误' })
  }


})

exports.open = open;
exports.findList = findList;
exports.findDetail = findDetail;