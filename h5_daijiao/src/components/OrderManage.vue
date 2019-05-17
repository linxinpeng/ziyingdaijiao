<template>
    <div class="order-manage">
        <x-header :left-options="{backText: ''}" >订单管理</x-header>
        <div style="height: 1px;background:#eeeeee;"></div>
        <div class="m-box">
            <tab :line-width=3 active-color='#4999ff' v-model="index">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
            </tab>
            <swiper v-model="index" :show-dots="false">
                <swiper-item v-for="(item, index) in info" :key="index">
                <div class="tab-swiper vux-center">
                    <div class="s-inner">
                        <div class="i-header">
                            <div class="h-left">
                                <span></span>
                                <span></span>
                            </div>
                            <div class="h-right">
                                <p>￥</p>
                                <p>待支付</p>
                            </div>
                        </div>
                    </div>
                </div>
                </swiper-item>
            </swiper>
        </div>
    </div>
</template>
<script>
const info = ()=>{return [
                {
                    status: 1,
                    name:'林小宝',
                    type:'公积金',
                    city:'厦门市',
                    month:'2019年5月',
                    money:'1920.90',
                    statusText:'待支付',
                    btnText:'去支付'
                },
                {
                    status: 2,
                    name:'林小月',
                    type:'公积金',
                    city:'厦门市',
                    month:'2019年5月',
                    money:'1920.90',
                    statusText:'受理中',
                    btnText:'退款中'
                },
                {
                    status: 3,
                    name:'林小花',
                    type:'公积金',
                    city:'厦门市',
                    month:'2019年5月',
                    money:'1920.90',
                    statusText:'已退款',
                    btnText:'已退款'
                },
                {
                    status: 2,
                    name:'林小六',
                    type:'社保',
                    city:'厦门市',
                    month:'2019年5月',
                    money:'1920.90',
                    statusText:'受理中',
                    btnText:'退款中'
                },
                {
                    status: 3,
                    name:'林小七',
                    type:'公积金',
                    city:'厦门市',
                    month:'2019年5月',
                    money:'1920.90',
                    statusText:'已退款',
                    btnText:'已退款'
                },
                {
                    status: 1,
                    name:'林小宝',
                    type:'公积金',
                    city:'厦门市',
                    month:'2019年5月',
                    money:'1920.90',
                    statusText:'待支付',
                    btnText:'去支付'
                }
            ] }
export default {
    name:'OrderManage',
    data(){
        return{
            index: 0,
            list2:['全部','待支付','受理中','已退款'],
            demo2:'全部',
            all:info()
        }
    },
    watch:{
        'index'(from,to){
            console.log(from)
        }
    }
}
</script>
<style lang="less" scoped>
    .order-manage{
        font-size: .12rem;
    }
</style>

