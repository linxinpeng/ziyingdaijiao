<template>
    <div class="pay-success">
        <x-header :left-options="{backText: ''}" >充值成功</x-header>
        <div style="height: 1px;background:#eeeeee;"></div>
        <div class="s-box">
            <div class="b-header">
                <img src="../assets/image/成功@2x.png" />
                <h4>充值成功</h4>
                <p>资金已存入您的账户</p>
            </div>
            <div class="b-btn">
                <div class="btn-left" @click="$router.push('/balance')">
                    查看账户余额
                </div>
                <div class="btn-right" @click="$router.push('/person')">
                    返回首页
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .pay-success{
        .s-box{
            .b-header{
                padding-top: .2rem;
                text-align: center;
                img{
                    width: .86rem;
                    height: .86rem;
                    vertical-align: middle;
                }
                h4{
                    text-align: center;
                    font-size: .22rem;
                    color: #333333;
                    padding-bottom: .1rem;
                }
                p{
                    font-size: .15rem;
                    color: #999999;
                }
            }
            .b-btn{
                text-align: center;
                .btn-left,.btn-right{
                    width: 1.5rem;
                    height: .44rem;
                    border-radius: 30px;
                    text-align: center;
                    line-height: .44rem;
                    border: 1px solid #dcdcdc;
                    font-size: .16rem;
                    display: inline-block;
                }
                .btn-right{
                    background: #4999ff;
                    color: #ffffff;
                }
            }
        }
    }
</style>
