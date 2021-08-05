<template>
  <div class="login">
    <topNav></topNav>
    <div class="conter">
      <van-form @submit="onSubmit">
      <van-field
          v-model="email"
          type="email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
       <p class="goLogin" @click="goLogin">没有账号，去注册</p>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" color="#337ffe" :disabled='jinyong'>登录</van-button>
        </div>
      </van-form>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from "@/components/bottomNav";
import topNav from "@/components/topNav";
// import { Notify,Toast  } from "vant";
import {login} from "@/api/api.js"
export default {
  // 登录页
  name: "login",
  components: {
    bottomNav,
    topNav
  },
  data() {
    return {
      email: "",
      password: "",
      jinyong:false
    };
  },
  methods: {
      goLogin(){
          this.$router.push('/register')
      },
    onSubmit(values) {
        login(values).then((res)=>{
            // console.log(res)
            let access_token='Bearer'+res.data.access_token
            this.$store.commit('setToken', access_token)
           this.$router.push('/home')
        })
        // Toast('已提交')
        // this.jinyong=true
    //   console.log( values);
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
