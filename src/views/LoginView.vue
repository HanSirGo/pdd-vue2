<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, validator: fn, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true,validator: fn, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import instance from '@/api/api'
import debounce from '@/utils/debounce'
import {Toast} from 'vant'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      debounceloginfn:null,
      nextTo:null
    };
  },
  methods: {
    async loginfn(){
      //登录验证
      let {data} = await instance.post('/login')
      this.$store.commit('settoken',data.token)
      console.log(data);
      //跳转 从哪儿来 到哪里去
      Toast({
        type:"success",
        message:'登录成功',
        onClose:()=>{
          this.$router.push({name:this.nextTo})
        }
      })
    },
    onSubmit(values) {
      //登录验证 用户行为
      console.log(1);
      this.debounceloginfn()
      // console.log("submit", values); //提交时的用户名和密码
    },
    fn(value, rule) {
      // console.log(value, rule); //输入表单的值
    },
  },
  created(){
    this.nextTo = this.$route.query.name
    // console.log(this.$route.query.name);
    this.debounceloginfn = debounce(this.loginfn,2000)
  },
};
</script>
<style lang="less" scoped>
.login{
  height:100vh;
  display:flex;
  align-items: center;
  .van-form{
    width:100vw;
  }
}
</style>