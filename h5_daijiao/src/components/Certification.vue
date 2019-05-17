<template>
    <div class="certification" :style="`height:${winHiehgt}px`">
        <x-header :left-options="{backText: ''}" >个体商户认证申请</x-header>
        <div class="c-box">
            <div class="b-header">
                <img src="../assets/image/banner@3x.png" width="100%" style="display: block;"/>
                <div class="h-title"  @click="$router.push('/download')">请先阅读并下载《五险一金代理服务协议》<img src="../assets/image/协议@2x.png" /></div>
            </div>
            <div style="height: .1rem;background: #f2f2f2;"></div>
            <div class="b-info">
                <div class="i-item">
                    <span class="i-s1">经营者姓名</span>
                    <span class="i-s2">
                        <input type="text" placeholder="请输入经营者姓名" v-model="name"/>
                    </span>
                </div>
                <div class="i-item">
                    <span class="i-s1">手机号</span>
                    <span class="i-s2">
                        <input type="text" placeholder="手机号" maxlength="11" v-model="phone" @input="phone = phone.replace(/[^\d]/g,'')"/>
                    </span>
                </div>
            </div>
            <div style="height: .1rem;background: #f2f2f2;"></div>
            <div class="b-info">
                <div class="i-item">
                    <span class="i-s1">营业执照名称</span>
                    <span class="i-s2">
                        <input type="text" placeholder="请输入营业执照名称" v-model="yyname"/>
                    </span>
                </div>
                <div class="i-item">
                    <span class="i-s1">营业地址</span>
                    <span class="i-s2">
                        <input type="text" placeholder="请输入营业地址" v-model="yyaddree"/>
                    </span>
                </div>
                 <div class="i-item">
                    <span class="i-s1">执照注册号</span>
                    <span class="i-s2">
                        <input type="text" placeholder="请输入执照注册号" v-model="yynumber"/>
                    </span>
                </div>
            </div>
            <div style="height: .1rem;background: #f2f2f2;"></div>
             <div class="b-info">
                <div class="i-item" @click="$router.push('/update')">
                    <span class="i-s3">个体工商户营业执照</span>
                    <span class="i-s4">
                        上传<img src="../assets/image/jinru@2x.png" />
                    </span>
                </div>
                <div class="i-item" @click="$router.push('/ServerUpdate')">
                    <span class="i-s3">《五险一金代理服务协议》</span>
                    <span class="i-s4">
                        上传<img src="../assets/image/jinru@2x.png" />
                    </span>
                </div>
            </div>
            <div class="back-home" @click="$router.push('/person')">
                <img src="../assets/image/首页@2x.png" />
            </div>
            <div class="b-bottom">
                <div class="b-left" @click="toCustomer">
                    <img src="../assets/image/我的客服@2x.png" />
                </div>
                <div class="b-right" @click="onSubmit">
                    提交认证申请
                </div>
            </div>
        </div>
        <toast v-model="show" type="text" :time="800" is-show-mask :text="msg" position="top"></toast>
    </div>
</template>
<script>
export default {
    data(){
        return{
            winHiehgt: window.innerHeight || 750,
            name:'',
            phone:'',
            yyname:'',
            yyaddree:'',
            yynumber: '',
            show: false,
            msg:'请输入经营者姓名'
        }
    },
    methods:{
        //跳到客服
        toCustomer(){

        },
        //提交认证
        onSubmit(){
            if(!this.name.trim()){
                this.show =true;
                return
            }
            if(!this.phone.trim()){
                this.show = true;
                this.msg = '请输入手机号';
                return
            }
            if(!/^1[3|4|7|8]\d{9}/.test(this.phone)){
                this.show = true;
                this.msg = '请输入正确的手机号码';
                return
            }
            if(!this.yyname.trim()){
                this.show = true;
                this.msg = '请输入营业执照名称';
                return
            }
            if(!this.yyaddree.trim()){
                this.show = true;
                this.msg = '请输入营业地址'
                return
            }
            if(!this.yynumber.trim()){
                this.show = true;
                this.msg = "请输入注册号"
                return
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .certification{
        background: #f2f2f2;
        .c-box{
            
            .b-header{
                .h-title{
                    font-size: .12rem;
                    color: #4999ff;
                    height: .4rem;;
                    line-height: .4rem;
                    background: #ecf5ff;
                    padding-left: .1rem;
                    img{
                        width: .05rem;
                        height: .085rem;
                        float: right;
                        margin-top: .15rem;
                        margin-right: .2rem;
                    }
                }
            }
            .b-info{
                background: #ffffff;
                padding: 0 .12rem;
                .i-item{
                    height: .44rem;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #eeeeee;
                    .i-s1{
                        font-size: .14rem;
                        color: #333333;
                        width: 1.2rem;
                    }
                    .i-s2{
                        height: .44rem;
                        input{
                            font-size: .14rem;
                            float: right;
                            border: none;
                            outline: none;
                            height: 100%;
                        }
                        input::-webkit-input-placeholder {
                            /* placeholder颜色  */
                            color: #c9c9c9;
                        }
                    }
                    .i-s3{
                        width: 2rem;
                        font-size: .14rem;
                        color: #333333;
                    }
                    .i-s4{
                        font-size: .12rem;
                        color: #c9c9c9;
                        margin-left: auto;
                        display: flex;
                        align-items: center;
                        img{
                            width: .07rem;
                            height: .12rem;
                            margin-left: .1rem;
                        }
                    }
                }
            }
            .back-home{
                width: .4rem;
                height: .4rem;
                position: fixed;
                bottom: 1.3rem;
                right: .1rem;
                z-index: 99;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .b-bottom{
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background: #ffffff;
                display: flex;
                height: .5rem;
                .b-left{
                    width: 1.3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: 1.15rem;
                        height: .34rem;
                    }
                }
                .b-right{
                    flex-grow: 1;
                    font-size: .16rem;
                    color: #ffffff;
                    background: #4999ff;
                    text-align: center;
                    line-height: .5rem;
                }
            }
        }
    }
</style>

