<template>
  <div class="home">
    <x-header :left-options="{backText: ''}" >登陆</x-header>
    <div class="box" :style="`height:${winHieght}px`">
      <div class="b-content">
        <h3 class="c-title">欢迎登录</h3>
        <p class="c-desc">您好，请在下方输入你的手机号和验证码</p>
        <h4 class="c-stitle">手机号</h4>
        <input class="c-phone" type="text" maxlength="11" placeholder="请输入手机号" v-model="phone" @input = "phone = phone.replace(/[^\d]/g,'')"/>
        <h4 class="c-stitle">验证码</h4>
        <div class="c-vcode">
          <input type="text" placeholder="请输入验证码" v-model="VCode" @input = "VCode = VCode.replace(/[^\d]/g,'')"/>
          <span v-if="!isSend" @click="onSendCode">发送验证码</span>
          <span v-else>{{time}}s</span>
        </div>
        <button class="c-btn" @click="onLogin">登录</button>
        <p class="c-last" style="vertical-align:middle;" ><input type="checkbox" v-model="isCheck" style="vertical-align:middle;margin-right: .05rem;"/>同意<a href="#">《用户注册协议》</a>和<a href="#">《隐私政策》</a></p>
      </div>
    </div>
    <alert v-model="isShow" title="提示" > 请先同意《用户注册协议》和《隐私政策》</alert>
    <toast v-model="show" type="text" :time="800" is-show-mask :text="msg" position="top"></toast>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
import { truncate } from 'fs';
export default {
  name: 'Home',
  data () {
    return {
      winHieght: (window.innerHeight || 750) - 46,
      isSend: false,
      time: 60,
      phone: '',
      VCode: '',
      isCheck: false,
      isShow: false,
      show:false,
      msg:'请输入手机号'
    }
  },
  methods:{
    //发送验证码
    onSendCode(){
      if(!this.phone.trim()){
        this.show = true;
        return
      }
      if(!/^1[3|4|7|8]\d{9}/.test(this.phone)){
          this.show = true;
          this.msg = '请输入正确的手机号码';
          return
      }
      this.isSend = true;
      let timer = setInterval(()=>{
        this.time --
        if(this.time == 0){
          clearInterval(timer)
          this.isSend = false;
        }
      },1000)
    },
    //登录
    onLogin(){
       if(!this.phone.trim()){
        this.show = true;
        return
      }
       if(!this.VCode.trim()){
        this.show = true;
        this.msg = "请输入验证码";
        return
      }
      if(!this.isCheck){
        this.isShow = true;
        return;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .home{
    font-size: .12rem;
    .box{
      width: 100%;
      background-image: url('../assets/image/登录bg@3x.png');
      background-size: 100% 100%;
      padding-top: 1.5rem;
      box-sizing: border-box;
      .b-content{
        width: calc(100% - .24rem);
        margin: 0 auto;
        border-radius: 10px;
        padding: .2rem;
        background-color: #ffffff;
        box-sizing: border-box;
        text-align: left;
        .c-title{
          font-size: .23rem;
          color: #333333;
          font-weight: 400;
        }
        .c-desc{
          padding-top: .02rem;
          font-size: .12rem;
          color: #999999;
          padding-bottom: .46rem;
        }
        .c-stitle{
          font-size: .17rem;
          color: #333333;
          font-weight: 400;
        }
        .c-phone{
          margin-top: .21rem;
          width: 100%;
          font-size: .14rem;
          color: #333333;
          border: none;
          border-bottom: 1px solid #eeeeee;
          padding-bottom: .05rem;
          margin-bottom: .21rem;
          outline: none;
        }
        .c-phone::-webkit-input-placeholder {
              /* placeholder颜色  */
              color: #c9c9c9;
            }
        .c-vcode{
          width: 100%;
          position: relative;
          input{
            margin-top: .21rem;
            width: 100%;
            font-size: .14rem;
            color: #333333;
            border: none;
            border-bottom: 1px solid #eeeeee;
            padding-bottom: .05rem;
            margin-bottom: .21rem;
            outline: none;
            padding-right: 1rem;
            box-sizing: border-box;
          }
          input::-webkit-input-placeholder {
              /* placeholder颜色  */
              color: #c9c9c9;
            }
          span{
            position: absolute;
            top: 0;
            top: 0.16rem;
            right: .1rem;
            font-size: .14rem;
            color: #4999ff;
          }
        }
        .c-btn{
          width: 100%;
          font-size: .16rem;
          color: #ffffff;
          background-color: #c4ccdc;
          border: none;
          padding: .1rem 0;
          outline: none;
        }
        .c-btn:hover{
          background-color: #4999ff;
        }
        .c-last{
          margin-top: .41rem;
          width: 100%;
          text-align: center;
          font-size: .12rem;
          color: #999999;
          a{
            color: #4999ff;
          }
        }
      }
    }
  }
</style>

