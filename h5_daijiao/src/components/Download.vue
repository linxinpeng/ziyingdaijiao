<template>
    <div class="download">
        <x-header :left-options="{backText: ''}" >五险一金代理服务协议</x-header>
        <div style="height: 1px;background:#eeeeee;"></div>
        <div class="d-box">
            <img src="../assets/image/PDF(1)@2x.png" />
            <p>请先查阅并下载《五险一金代理服务协议》.pdf</p>
            <p>
            <a href="#">预览并下载至本地>></a>
            </p>
        </div>
        <div class="back-home" @click="$router.push('/person')">
            <img src="../assets/image/首页@2x.png" />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .download{
        .d-box{
            text-align: center;
            img{
                width: .46rem;
                height: .52rem;
                display: block;
                margin: auto;
                margin-top: .4rem;
            }
            p{
                font-size: .14rem;
                color: #333333;
                margin-top: .21rem;
            }
            a{
                font-size: .14rem;
                color: #4999ff;
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
    }
</style>

