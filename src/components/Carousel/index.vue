<template>
    <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper, { Pagination, Navigation } from 'swiper'
Swiper.use([Pagination, Navigation])
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Carousel',
    props:["list"],
    watch:{
        list:{
            //立即监听，不管你数据有没有变化，我上来立即监听一次
            immediate:true,
            handler(){
                this.$nextTick(()=>{
                    new Swiper(this.$refs.cur,{
                        loop:true,
                        pagination:{
                            el:".swiper-pagination",
                            //点击小球切换图片
                            clickable:true,
                        },
                        navigation:{
                            nextEl:".swiper-button-next",
                            prevEl:".swiper-button-prev"
                        },
                    })
                })
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>