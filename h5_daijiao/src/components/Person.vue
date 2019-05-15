<template>
    <div class="person">
        <x-header :left-options="{backText: ''}" >个体工商户自缴社保</x-header>
        <div class="box" :style="`height:${winHieght}px`">
            <div class="b-header">
                <img class="h-img" src="../assets/image/充值@3x.png"  @click="$router.push('/')"/>
                <div class="h-info">
                    <img src="../assets/image/头像@3x.png" />
                    <div class="i-info">
                        <p class="i-p1">未实名认证</p>
                        <p class="i-p2">157****9292</p>
                    </div>
                </div>
                <div class="h-momey">
                    <div class="m-left">
                        <p>账户余额（元）</p>
                        <strong>0.00</strong>
                    </div>
                    <div class="m-right" @click="showDig = true">
                        <p>待支付金额（元）</p>
                        <strong>0.00</strong>
                    </div>
                </div>
            </div>
            <div class="b-center">
                <div class="c-left">
                    <h3>自助缴纳社保</h3>
                    <p>社保不断缴，生活更美好！</p>
                </div>
                <div class="c-right">
                    <img src="../assets/image/立即缴纳@2x.png"  @click="$router.push('/')"/>
                </div>
            </div>
            <div class="b-content">
                <ul>
                    <li @click="$router.push('/')">
                        <span class="c-s1"><img src="../assets/image/lb_认证中心@2x.png" /></span>
                        <span class="c-s2">商户资质认证中心</span>
                        <span class="c-s3">未认证<img src="../assets/image/jinru@2x.png" /></span>
                    </li>
                    <li @click="$router.push('/')">
                        <span class="c-s1"><img src="../assets/image/lb_订单管理@2x.png" /></span>
                        <span class="c-s2">订单管理</span>
                        <span class="c-s3">自助缴纳<img src="../assets/image/jinru@2x.png" /></span>
                    </li>
                    <li @click="$router.push('/')">
                        <span class="c-s1"><img src="../assets/image/lb_参保人管理@2x.png" /></span>
                        <span class="c-s2">参保人管理</span>
                        <span class="c-s3">添加参保人<img src="../assets/image/jinru@2x.png" /></span>
                    </li>
                </ul>
            </div>
            <div class="b-service">
                <img src="../assets/image/我的客服@2x.png"  @click="$router.push('/')"/>
                <p>如有疑问，请及时联系客服</p>
            </div>
        </div>
        <x-dialog v-model="showDig" class="dialog-demo" :hide-on-blur="true">
            <div class="dig-box">
                <h3>待支付金额明细<span @click="showDig = false"><img src="../assets/image/弹窗取消@2x.png" /></span></h3>
                <p style="font-size: .12rem;color: #ef4e4e;text-align: left;">所有订单默认自动续费，若账户上无足够余额可以扣除，请及时充值支付。如不再继续缴纳请联系客服进行减员或取消订单。</p>
                <img src="../assets/image/分割线@3x.png" width="100%" />
                <ul>
                    <li v-for="i in 3" :key="i">
                        <span class="s1">社保代缴费用</span>
                        <span class="s2">x1</span>
                        <span class="s3">￥569.98</span>
                    </li>
                </ul>
                <div class="b-bottom">
                    <span>总计金额：</span>
                    ￥1214.86
                </div>
            </div>
        </x-dialog>
    </div>
</template>
<script>

export default {
    name: 'Person',
    data(){
        return{
            winHieght: (window.innerHeight || 750) - 46,
            showDig: false
        }
    }
}
</script>
<style lang="less">
    .person{
        font-size: .12rem;
        .box{
            width: 100%;
            background-image: url('../assets/image/个人中心bg@3x.png');
            background-size: 100% 100%;
            padding-top: .1rem;
            box-sizing: border-box;
            .b-header{
                width: calc(100% - .24rem);
                margin: auto;
                background-image: url('../assets/image/我的bg@3x.png');
                background-size: 100% 100%;
                padding: .12rem;
                box-sizing: border-box;
                position: relative;
                .h-img{
                    position: absolute;
                    top: .12rem;
                    right: 0;
                    width: .625rem;
                    height: .3rem;
                }
                .h-info{
                    display: flex;
                    img{
                        width: .50rem;
                        height: .50rem;
                    }
                    .i-info{
                        flex-grow: 1;
                        display: flex;
                        // align-items: center;
                        justify-content: center;
                        padding-left: .1rem;
                        flex-direction: column;
                        .i-p1{
                            font-size: .14rem;
                            color: rgba(255,255,255,.6);
                        }
                        .i-p2{
                            font-size: .18rem;
                            padding-top: .02rem;
                            color: #ffffff;
                        }
                    }
                }
                .h-momey{
                    margin-top: .3rem;
                    display: flex;
                    .m-left,.m-right{
                        flex-grow: 1;
                        p{
                            font-size: .12rem;
                            color: #ffffff;
                            padding-bottom: 8px;
                        }
                        strong{
                            font-size: .28rem;
                            color: #ffffff;
                            font-family: 'DIN1451EF MittelAlt';
                        }
                    }
                    .m-right{
                        padding-left: .2rem;
                        border-left: .02rem solid #bbb;
                    }
                }
            }
            .b-center{
                background-color: #ffffff;
                border-radius: 4px;
                height: .84rem;
                width: calc(100% - .24rem);
                margin: .1rem auto;
                padding: .12rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                .c-right{
                    width: .86rem;
                    height: .6rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .c-left{
                    flex-grow: 1;
                    h3{
                        font-size: .18rem;
                        color: #333333;
                    }
                    p{
                        padding-top: .02rem;
                        font-size: .12rem;
                        color: #999999;
                    }
                }
            }
            .b-content{
                width: calc(100% - .24rem);
                margin: .1rem auto;
                background-color: #ffffff;
                border-radius: 4px;
                padding: .12rem;
                box-sizing: border-box;
                ul{
                    li{
                        display: flex;
                        align-items: center;
                        height: .6rem;
                        border-bottom: 1px solid #eee;
                        .c-s1{
                            width: .25rem;
                            height: .25rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .c-s2{
                            padding-left: .1rem;
                            color: #333333;
                            font-size: .15rem;
                        }
                        .c-s3{
                            margin-left: auto;
                            color: #999999;
                            font-size: .12rem;
                            display: flex;
                            align-items: center;
                            img{
                                width: .07rem;
                                height: .12rem;
                                margin-left: .09rem;
                                padding-top: .01rem;
                            }
                        }
                    }
                    li:last-child{
                        border: none;
                    }
                }
            }
            .b-service{
                margin-top: .3rem;
                text-align: center;
                img{
                    width: 1.15rem;
                    height: .34rem;
                }
                p{
                    margin-top: .1rem;
                    font-size: .12rem;
                    color: #999999;
                }
            }
        }
        .weui-dialog{
            background-color: transparent;
        }
        .dialog-demo{
            .dig-box{
                h3{
                    background-color: #a9b4c9;
                    color: #ffffff;
                    height: .5rem;
                    line-height: .5rem;
                    position: relative;
                    span{
                        display: inline-block;
                        width: .3rem;
                        height: .5rem;
                        position: absolute;
                        top: 0;
                        right: 0;
                        text-align: center;
                        z-index: 99;
                        img{
                            width: .14rem;
                            height: .14rem;
                            display: inline-block;
                            line-height: .3rem;
                        }
                    }
                }
                p{
                    padding: .12rem;
                    line-height: 1.8;
                    background-color: #ffffff;
                }
                img{
                    vertical-align: middle;
                }
                ul{
                    background-color: #ffffff;
                    padding-bottom: .1rem;
                    border-bottom: 1px solid #eee;
                    li{
                        display: flex;
                        margin-bottom: .19rem;
                        .s1,.s2,.s3{
                            flex-grow: 1;
                            font-size: .12rem;
                            color: #999999;
                        }
                        .s3{
                            color: #333333;
                        }
                    }
                }
                .b-bottom{
                    text-align: right;
                    font-size: .12rem;
                    color: #333333;
                    height: .5rem;
                    line-height: .5rem;
                    background-color: #ffffff;
                    padding-right: .2rem;
                    span{
                        color: #999999;
                    }
                }
            }
        }
    }
</style>

