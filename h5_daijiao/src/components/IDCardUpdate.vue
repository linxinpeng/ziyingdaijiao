<template>
    <div class="id-card-update">
        <x-header :left-options="{backText: ''}" >上传身份证</x-header>
        <div style="height: 1px;background:#eeeeee;"></div>
        <div class="u-box">
            <div class="b-header">
                <div class="h-img">
                    <span>
                        <img src="../assets/image/身份证正面@2x.png" />
                    </span>
                    <span>
                        <img src="../assets/image/身份证反面@2x.png" />
                    </span>
                </div>
                <p>上传营业执照扫描件或照片</p>
            </div>
            <div class="b-content">
                <img src="../assets/image/身份证标准@2x.png" />
            </div>
            <div class="save">
                保存
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.id-card-update{
    .u-box{
        .b-header{
            .h-img{
                margin: .2rem auto;
                text-align: center;
                img{
                    width: 1.5rem;
                    height: 1.05rem;
                    vertical-align: middle;
                }
            }
            p{
                font-size: .14rem;
                text-align: center;
                color: #333333;
            }
        }
        .b-content{
            width: calc(100 - .24rem);
            margin-top: .27rem;
            img{
                width: 100%;
            }
        }
        .save{
            position: fixed;
            bottom: 0;
            left: 0;
            background: #4999ff;
            width: 100%;
            height: .5rem;
            text-align: center;
            line-height: .5rem;
            font-size: .16rem;
            color: #ffffff;
        }
    }
}
</style>

