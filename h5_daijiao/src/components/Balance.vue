<template>
    <div class="balance">
        <div style="position:fixed;top: 0;left: 0; width: 100%;background: #fff;z-index: 99;">
            <x-header :left-options="{backText: ''}" >账户余额</x-header>
            <div style="height: 1px;background: #eee;"></div>
        </div>
        <div style="height: 47px;"></div>
        <div class="b-box">
            <div class="b-header">
                <p>账户余额（元）</p>
                <h3>0.00</h3>
                <div class="h-btn" @click="$router.push('/chargemoney')">充值</div>
            </div>
            <div style="height: .1rem;background-color: #f2f2f2;"></div>
            <div class="b-detail">
                <div class="d-item" v-for="i in 9" :key="i">
                    <div class="i-left">
                        <p class="l-p1">代缴支付</p>
                        <p class="l-p2">2019.10.15 18:15</p>
                    </div>
                    <div class="i-right">
                        -598.00元
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{

    }
}
</script>
<style lang="less" scoped>
    .balance{
        .b-box{
            .b-header{
                height: 2.5rem;
                text-align: center;
                position: relative;
                p{
                    font-size: .15rem;
                    color: #333333;
                    padding-top: .42rem;
                    padding-bottom: .25rem;
                }
                h3{
                    font-size: .4rem;
                    color: #333333;
                    font-family: 'DIN1451EF MittelAlt'
                }
                .h-btn{
                    height: .44rem;
                    width: 1.5rem;
                    text-align: center;
                    line-height: .44rem;
                    font-size: .16rem;
                    color: #ffffff;
                    background-color: #4999ff;
                    border-radius: 30px;
                    position: absolute;
                    left: 50%;
                    bottom: .28rem;
                    transform: translateX(-50%);
                }
            }
            .b-detail{
                .d-item{
                    height: .7rem;
                    display: flex;
                    align-items: center;
                    padding: 0 .12rem;
                    border-bottom: 1px solid #eeeeee;
                    .i-left{
                        .l-p1{
                            font-size: .16rem;
                            color: #333333;
                            padding-bottom: .08rem;
                        }
                        .l-p2{
                            font-size: .12rem;
                            color:#999999;
                        }
                    }
                    .i-right{
                        width: 1rem;
                        margin-left: auto;
                        font-size: .15rem;
                        color: #333333;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>

