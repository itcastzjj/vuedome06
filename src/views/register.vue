<template>
  <div class="register">
    <topNav></topNav>
    <div class="conter">
      <van-form @submit="onSubmit">
        <van-field
          v-model="name"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password_confirmation"
          type="password"
          name="password_confirmation"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请再次填写密码' }]"
        />
        <van-field
          v-model="email"
          type="email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
       <p class="goLogin" @click="goLogin">已有账号，去登录</p>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" color="#337ffe" :disabled='jinyong'>注册</van-button>
        </div>
      </van-form>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from "@/components/bottomNav";
import topNav from "@/components/topNav";
import { Notify,Toast  } from "vant";
import {register} from '@/api/api.js'
export default {
  // 注册页
  name: "register",
  components: {
    bottomNav,
    topNav
  },
  data() {
    return {
      name: "",
      password: "",
      email: "",
      password_confirmation: '',
      jinyong:false
    };
  },
  methods: {
      goLogin(){
          this.$router.push('/login')
      },
    onSubmit(values) {
 
      if (values.password !== values.password_confirmation) {
        Notify({ type: "warning", message: "两次密码不一致" });
        return   
      }
        register(values).then((res)=>{
            console.log(res)
            // this.$store.commit('setToken',res.data.data.token)
            if(res.status==201){
            this.$router.push('/login')

            }
        })
        Toast('已提交')
        // this.jinyong=true
    }
  }
};
</script>
<style>
.conter {
  margin: 46px 0 0 0;
  /* background: rgb(60, 87, 245); */
}
.goLogin{
    text-align: center;
    color: #337ffe;
    font-size: 12px
}
</style>
