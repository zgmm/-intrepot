<template>
  <div class="Spring animated show">
     <div class="spring">
        <p><span class="iconfont icon-gantanhao"></span></p>
        <p class="paragraph">{{paragraph}}</p>
        <p class="confirm" @click="close()">确认</p>
     </div>
  </div>
</template>

<script>
export default {
    name: 'Spring',
    props: ["paragraph"],
    methods: {
        close() {
           this.$emit('close')
        },
    },

}
</script>
<style scoped>
    .iconfont{
        color: #f8cb86;
        font-size: 1.29rem;
    }
    @keyframes show {
        0% {
            transform: scale(1.1);
            left: 12.8%;
        }
        20% {
            transform: scale(0.9);  
            left: 12.8%;
        }
        40% {
            transform: scale(1.1);
            left: 12.8%;
        }
        60% {
            transform: scale(0.9);     
            left: 12.8%;
        }
        80% {
            transform: scale(1.1);
            left: 12.8%;
        }
        100% {
            transform: scale(1);     
            left: 12.8%;
        }
    }
    
    .Spring{
        position: absolute;
        width: 4.83rem;
        height: 3.1rem;
        top: 1.47rem;
        transform: translateX(-50%);
        left: 50%;
        background: #fdfdfd;
        animation: show 0.5s;
    }
    .paragraph{
        color: #000;
        font-size: .29rem;
    }
    .confirm{
        background: #4cd964;
        border-radius: 0 0 .14rem .14rem;
        color: #fff;
        font-weight: bold;
        font-size: .34rem;
        padding: .26rem 0;
        margin: 0;
    }
</style>