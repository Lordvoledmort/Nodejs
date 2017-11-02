//在nodejs 中以.js 结尾的文件称为一个模块

console.log('我是以.js文件结尾的模块')

//






//作为开发者需要真正对功能进行封装，并且能够提供给其他开发者调用


function addCart(){
    //假设通过addCart增加购物车

}

function deleteCart(){
    //假设通过deleteCart删除购物车
}

function modifyCart() {
    //假设通过modifyCart删除购物车
}



//仅仅将方法定义不行。还得将这些函数公开出去
//使用return 不合语法 Nodejs 新增了一个专门f负责
//将模块内部函数或变量公开的对象modules

module.exports.addCart = addCart;
module.exports.deleteCart = deleteCart;
module.exports.modifyCart = modifyCart;

module.exports.abc = version;

//模块的返回值就是module.exports

//在nodejs中除了用modules.exports 外
//又提供了一个exports 来实现与model.exports类似的功能

exports.addCart = addCart;
exports.deleteCart = deleteCart;
exports.modifyCart = modifyCart;

exports.abc = version;