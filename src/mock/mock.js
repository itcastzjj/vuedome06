import Mock from 'mockjs'

Mock.mock('https://api.shop.eduwork.cn/api/auth/register',() => {
    // let use={name:"arthurarthur",password:"asdasd",password_confirmation:"asdasd",email:"asdasd@163.com"}
    // let json=JSON.parse(options.body)

    // if(json.name==use.name){
    //    if(json.password==use.password){

    //    }
    // }
    return{data:{token:'afsfafasfdasdf'}}
});
Mock.mock('https://api.shop.eduwork.cn/api/auth/login',(options) => {
    let use={name:"arthurarthur",password:"asdasd",password_confirmation:"asdasd",email:"asdasd@163.com"}
    let json=JSON.parse(options.body)

    if(json.name==use.name){
       if(json.password==use.password){
        return{data:{token:'afsfafasfdasdf'}}
       }else{
        return{err:'密码不正确'}
    }
    }else{
        return{err:'账号不存在'}
    }
   
});
Mock.setup({
    timeout: '200-600'
})