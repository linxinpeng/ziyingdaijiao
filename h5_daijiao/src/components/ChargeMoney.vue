<template>
    <div class="charge-money">
        <x-header :left-options="{backText: ''}" >充值</x-header>
        <div class="m-box">
            <div class="b-header">
                <div class="h-inner">
                    <h3>充值金额（元）</h3>
                    <div class="h-money">
                        <span>￥</span>
                        <input type="text" placeholder="请输入充值金额" v-model="money" @input="money = NumberCheck(money)"/>
                        <div class="clearfix"></div>
                    </div>
                    <p>账户余额：0元</p>
                </div>
            </div>
            <div class="b-pay">
                <p class="p-title">请选择支付方式</p>
                <div class="p-type" v-for="item in payMethod" :key="item.key">
                    <img :src="item.icon" />
                    <span class="t-s1">{{item.value}}</span>
                    <span class="t-s2" @click="onChoose(item.key)">
                        <img v-show="choose != item.key " src="../assets/image/选择未选@2x.png" />
                        <img v-show="choose == item.key" src="../assets/image/可行@2x.png" />
                    </span>
                </div>
            </div>
            <div class="b-btn" @click="onSubmit">
                确认充值
            </div>
            <toast v-model="showMoney" type="text" :time="800" is-show-mask :text="showTitle" position="top"></toast>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            choose: 0,
            payMethod: [{
                icon: require('../assets/image/微信支付@2x.png'),
                key: 'wx',
                value: '微信支付(免手续费)'
            }, {
                icon: require('../assets/image/支付宝支付@2x.png'),
                key: 'zub',
                value: '支付宝支付(免手续费)'
            }],
            money: '',
            showMoney: false,
            showTitle:"请输入充值金额"
        }
    },
    methods:{
        //验证金额只能输入整数或者保留两位小数
         NumberCheck(num) {
            var str = num;
            var len1 = str.substr(0, 1);
            var len2 = str.substr(1, 1);
            //如果第一位是0，第二位不是点，就用数字把点替换掉
            if (str.length > 1 && len1 == 0 && len2 != ".") {
                str = str.substr(1, 1);
            }
            //第一位不能是.
            if (len1 == ".") {
                str = "";
            }
            //限制只能输入一个小数点
            if (str.indexOf(".") != -1) {
                var str_ = str.substr(str.indexOf(".") + 1);
                if (str_.indexOf(".") != -1) {
                str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1);
                }
            }
            //正则替换，保留数字和小数点
            str = str.replace(/[^\d^\.]+/g,'')
            //如果需要保留小数点后两位，则用下面公式
            str = str.replace(/\.\d{3}$/,'')
            return str;
         },
        //确认充值
        onSubmit(){
            if(!this.money.trim()){
                this.showMoney = true;
                return
            }
            if(this.choose == 0){
                this.showMoney = true;
                this.showTitle = "请选择支付方式";
                return
            }

            console.log('doSomething....')
        },
        //选择支付方式
        onChoose(key){
            this.choose = key;
        }
    }
}
</script>

<style lang="less" scoped>
    .charge-money{
        .m-box{
            background-color: #ffffff;
            .b-header{
                background-color: #f2f2f2;
                padding: .12rem;
                .h-inner{
                    margin: auto;
                    padding: 0 .12rem;
                    box-sizing: border-box;
                    background-color: #ffffff;
                    h3{
                        font-size: .18rem;
                        color: #333333;
                        margin-bottom: .16rem;
                        padding-top: .12rem;
                    }
                    .h-money{
                        position: relative;
                        border-bottom: 1px solid #eee;
                        padding-bottom: .05rem;
                        span{
                            position: absolute;
                            top: 0;
                            left: 0;
                            display: inline-block;
                            width: .25rem;
                            height: .25rem;
                            line-height: .25rem;
                            font-size: .18rem;
                        }
                        input{
                            border: none;
                            outline: none;
                            height: .25rem;
                            padding-left: .3rem;
                            font-size: .18rem;
                            width: 100%;
                            box-sizing: border-box;
                            float: left;
                        }
                        input::-webkit-input-placeholder {
                            /* placeholder颜色  */
                            color: #c9c9c9;
                            }
                    }
                    p{
                        font-size: .12rem;
                        color: #999999;
                        height: .34rem;
                        line-height: .34rem;
                    }
                }
            }
            .b-pay{
                padding: 0 .24rem;
                
                .p-title{
                    font-size: .15rem;
                    color: #999999;
                    padding: .12rem 0;
                }
                .p-type{
                    display: flex;
                    height: .5rem;
                    align-items: center;
                    border-bottom: 1px solid #eee;
                    img{
                        width: .27rem;
                        height: .27rem;
                    }
                    .t-s1{
                        flex-grow: 1;
                        font-size: .15rem;
                        color: #333333;
                        padding-left: .1rem;
                    }
                    .t-s2{
                        width: .18rem;
                        height: .18rem;
                        margin-left: auto;
                        img{
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                    }
                }
            }
            .b-btn{
                width: calc(100% - .35rem);
                margin: .4rem auto;
                text-align: center;
                padding: .15rem 0;
                background-color: #c4ccdc;
                color: #ffffff;
                font-size: .16rem;
                border-radius: 50px;
            }
            .b-btn:hover{
                background-color: #4999ff;
            }
        }
    }
</style>

