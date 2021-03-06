const {exe, escape } = require('../DB/mysql')
const {successModel, errorModel } = require('../model/resModel')


let userLogin = (userName, userPas, power) => {
    userName = escape(userName);
    userPas = escape(userPas);
    power = power === undefined ? 0 : power;
    const sql = `select * from user where user_name = ${userName} and user_pas=${userPas} and power = "${power}"`;
    return exe(sql).then( result => {
            if (result && result.length > 0) {
                return new successModel("登入成功");
            }else{
                return new errorModel("登入失败");
            }
        })
}


module.exports = {
    userLogin
}