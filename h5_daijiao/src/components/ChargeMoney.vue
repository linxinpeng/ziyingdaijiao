<template>
    <div class="charge-money">
        <x-header :left-options="{backText: ''}" >充值</x-header>
        <div class="m-box">
            <div class="b-header">
                <div class="h-inner">
                    <h3>充值金额（元）</h3>
                    <div class="h-money">
                        <span>￥</span>
                        <input type="text" placeholder="请输入充值金额" />
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
                    <span class="t-s2">
                        <img v-show="true" src="../assets/image/选择未选@2x.png" />
                        <img v-show="false" src="../assets/image/可行@2x.png" />
                    </span>
                </div>
            </div>
            <div class="b-btn">
                确认充值
            </div>
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
                key: '001',
                value: '微信支付(免手续费)'
            }, {
                icon: require('../assets/image/支付宝支付@2x.png'),
                key: '002',
                value: '支付宝支付(免手续费)'
            }]
        }
    },
    methods:{
        change(){

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
                        margin-bottom: .15rem;
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
                margin: .3rem auto;
                text-align: center;
                padding: .15rem 0;
                background-color: #c4ccdc;
                color: #ffffff;
                font-size: .16rem;
                border-radius: 50px;
            }
        }
    }
</style>

