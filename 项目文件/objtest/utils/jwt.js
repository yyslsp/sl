let jwt = require('jsonwebtoken');

module.exports = {
    //生成签名|令牌
    sigin:({username,_id})=>{
        //如果这两个条件为空 直接返回,理都不理他，哈哈
        if(!username || !_id) return;
        return jwt.sign({username,_id},'2088',{expiresIn:60*60*24})//令牌时间是秒计算 cookiesetion是毫秒计算

    },
        
    //校验签名
    verify:(token)=>{
        return new Promise((reslove,reject)=>{
            //业务 ->结果 -> reslove | reject 调用返回
            jwt.verify(token,'2088',(err,decode)=> !err? reslove(decode) : reject(err,message))
            //校验
            jwt.verify(token,'2088',(err,decode)=>{
                if(!err){
                    //没有错误的时候decode成功的对象
                    reslove(decode);//使用reslove返回去
                }else{
                    //校验失败的信息返回(username,_id,message,expiresIn)
                    reject(err,message)
                }
            })
        })
    }
}