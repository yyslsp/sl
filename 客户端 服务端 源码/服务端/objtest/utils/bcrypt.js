let bcrypt = require('bcrypt');

//暴漏出一个对象
module.exports = {
    //bcrypt.hashSync(明文密码,加密层级)
    //bcrypt.hashSync(客户端传过来的明文密码,加了密的库密码)
    //加密
    hash:password=>bcrypt.hashSync(password,10),
    //解密
    compare:(password,hash)=>bcrypt.compareSync(password,hash)

}

