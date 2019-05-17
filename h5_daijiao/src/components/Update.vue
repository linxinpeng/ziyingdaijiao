<template>
    <div class="update">
        <x-header :left-options="{backText: ''}" >营业执照证件上传</x-header>
        <div style="height: 1px;background:#eeeeee;"></div>
        <div class="u-box">
            <div class="b-header">
                <input type="file"  accept="image/*" size="0" @change="onUpdate($event)">
                <div class="h-img">
                    <img src="../assets/image/营业执照0@2x.png" />
                </div>
                <p>上传营业执照扫描件或照片</p>
            </div>
            <div class="b-content">
                <img src="../assets/image/营业执照标准@2x.png" />
            </div>
            <div class="save">
                保存
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        onUpdate(e){
            let imgSrc = e.target.files || e.dataTransfer.files;
            console.log(imgSrc[0])
        }
    }
}
</script>
<style lang="less" scoped>
    .update{
        .u-box{
            .b-header{
               .h-img{
                    width: 2.2rem;
                    height: 1.5rem;
                    margin: .2rem auto;
                    img{
                        width: 100%;
                        height: 100%;
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

