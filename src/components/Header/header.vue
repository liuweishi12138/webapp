<template>
<div class="head">
    <div class="top">
        <div class="avatar">
            <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg">
        </div>
        <div class="info">
            <div class="title">
                <i class="brand"></i>
                <span class="name">粥品香坊(大运村)</span>
            </div>
            <div class="desc">
                <span>蜂鸟专送/38分钟送达</span>
            </div>
            <div class="support">
                <Icon class="icon" size="1" type="decrease"></Icon>
                <span class="text">在线支付满28送老板</span>
            </div>
        </div>
        <div class="btn">
            <span>5个</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>    
        <div class="mask">
            <div class="mainWrap">
                <div class="main">
                    <!--画遮罩页-->
                </div>
            </div>
            <div class="footer">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
    <div class="bulletin">
        <div class="icon">
            <i></i>
        </div>
        <p class="text">
            是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
        </p>
        <div class="arrow">
            <i class="icon-keyboard_arrow_right"></i>
        </div>
    </div> 
    <div class="bg">
        <img src="https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png">
    </div>
</div>
</template>
<script>
import icon from '../icon/icon';
  export default {
    name:"Header",
    components:{
     "Icon":icon
    }

}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    @import "../../common/stylus/extend.styl"
    .head
        width 100%
        height 134px
        position relative
        overflow hidden
        .top
            position relative
            box-sizing border-box
            height 106px
            background rgba(7,17,27,.5)
            padding 24px 12px 18px 24px
            .avatar
                float left
                width 64px
                height 64px
                margin-right 16px
                img
                    width 100%
                    height 100%
                    border-radius 2px
            .info
                float left
                color rgba(255,255,255,1)
                margin-top -3px
                .title 
                    margin-top 2px
                    margin-bottom 8px
                    font-size 0
                    .brand
                        bg-image(brand)
                        display inline-block
                        width 30px
                        height 18px
                        vertical-align middle
                        margin-top 2px
                        background-size 100%
                        background-repeat no-repeat
                        margin-right 6px
                    .name
                        font-size 16px
                        font-weight bold
                        vertical-align middle
                .desc
                    font-size 12px
                .support
                    margin-top 10px
                    margin-bottom 2px
                    font-size 0
                    .icon
                        vertical-align middle
                        margin-right 4px
                    .text
                        vertical-align middle
                        font-size 10px
            .btn
                display flex
                justify-content space-around
                align-items center
                position absolute
                right 12px
                bottom 10px
                border-radius 8px
                width 40px
                height 24px
                font-size 10px
                font-weight 200
                color rgba(255,255,255,1)
                background rgba(0,0,0,.2)
                span
                    margin-left: 5px;
    .bulletin
        display flex
        align-items center
        height 28px
        background rgba(7,17,27,.2)
        font-size 10px
        color rgba(255,255,255,1)
        .icon
            flex-basis 26px
            margin-left 12px
            & > i
                bg-image(bulletin)
                background-size 100%
                background-repeat no-repeat
                display inline-block
                width 22px
                height 12px
        .text
            flex 1
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
        .arrow
            flex-basis 26px
    .bg
        position absolute
        left 0
        right  0
        top 0
        bottom 0
        background pink
        z-index -1
        filter blur(3px)
        img
            width 100%
            height 100%
    .mask
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 9
        background rgba(7,17,27,.8)
        overflow auto
        .mainWrap
            min-height 100%
            .main
                @extend .clearfix
                padding-bottom 96px
        .footer
            margin-top -96px
            height 96px
            line-height 96px
            color white
            text-align center
            font-size 32px
</style>
    